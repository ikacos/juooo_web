import React, { Component } from "react";
import { ListView, WingBlank, WhiteSpace } from "antd-mobile";
import ReactDOM from "react-dom";
import Block from "../../../components/block";
import { withRouter } from "react-router-dom";

import "./index.scss";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
];
const NUM_ROWS = 25;
let pageIndex = 0;
let showpage = 2;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Homebottom extends Component {
  // state = {
  //   id: [],
  //   data: [],

  // };

  // componentDidMount() {
  //   this.show();
  // }
  show = () => {
    this.get(`${this.api.show}`, { page: 1 }).then((res) => {
      console.log(res);
      this.setState({
        datalist: res.data.list,
        isLoading: false,

      });
    });
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      id: [],
      datalist: [],
    };
  }

  componentDidMount() {
    this.show();
    
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    // simulate initial Ajax
    
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    //加载新数据
    //hasMore：从后端数据，指示它是否是最后一页，这里是false

    // let param = {
    //   page: showpage,
    // };
    // (() => {
    //   this.get(`${this.api.show}`, param).then((res) => {
    //     console.log(res);
    //     this.setState({
    //       datalist: res.data.list,
    //       isLoading: false,
    //     });
    //   });
    // })();
    // showpage = showpage + 1;
    // console.log(showpage);
    // if (showpage===7) {
    //   return;
    // }
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };
  render() {
    // let index = data.length - 1;
    let listpage=-1;

    const row = (rowData, sectionID, rowID) => {
      // if (index < 0) {
      //   index = data.length - 1;
      // }
      // const obj = data[index--];
      listpage=listpage+1;
      // console.log('listpage:'+ listpage);
      // console.log('listpage:'+ this.state.datalist[listpage].pic);
      return (
  
            <Block
            linkToTicket={() => {
              // this.props.history.push("/ticket/" + item.schedular_id);
              this.props.history.push({
                pathname: "/ticket/" + this.state.datalist[listpage].schedular_id,
              });
            }}
            key={this.state.datalist[listpage].schedular_id}
            img={this.state.datalist[listpage].pic}
            title={this.state.datalist[listpage].name}
            time={this.state.datalist[listpage].end_show_time}
            price={this.state.datalist[listpage].max_price}
          /> 
       
      );
    };
    return (
      <div className="homebottom_style">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <div className="xunhui_style">
            <span>&nbsp;为你推荐</span>
          </div>
          <WhiteSpace size="lg" />
        </WingBlank>

        <WingBlank size="lg">
          <ListView
            ref={(el) => (this.lv = el)}
            dataSource={this.state.dataSource}
            renderHeader={() => <span></span>}
            renderFooter={() => (
              <div style={{ padding: 40, textAlign: "center" }}>
                {this.state.isLoading===true ? "666" : "Loading"}
              </div>
            )}
            renderRow={row}
            // renderSeparator={separator}
            className="am-list"
            pageSize={1}
            useBodyScroll
            // onScroll={() => {
            //   console.log("scroll");
            // }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={1}
          />
        </WingBlank>

        {/* <WingBlank size="lg">
          <div className="homebottom_bottom">
            {this.state.data.map((item) => {
              return (
                <Block
                  linkToTicket={() => {
                    // this.props.history.push("/ticket/" + item.schedular_id);
                    this.props.history.push({
                      pathname: "/ticket/"+item.schedular_id,
                    });
                  
                  }}
                  key={item.schedular_id}
                  img={item.pic}
                  title={item.name}
                  time={item.end_show_time}
                  price={item.max_price}
                />
              );
            })}
          </div>
        </WingBlank> */}
      </div>
    );
  }
}

export default withRouter(Homebottom);
