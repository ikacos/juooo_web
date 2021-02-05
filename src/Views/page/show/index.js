import React, { Component } from "react";
import {
  NavBar,
  Icon,
  Tabs,
  WhiteSpace,
  WingBlank,
  Popover,
} from "antd-mobile";
import TabbarrShowStore from "../../../Redux/TabbarrShow/store";
import Block from "../../../components/block";
import "./index.scss";
const Item = Popover.Item;

class Show extends Component {
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  };
  state = {
    open: false,
    tabs: [],
    datalist: [],
  };
  componentDidMount() {
    TabbarrShowStore.dispatch({
      type: "Hide",
      payload: true,
    });
    this.show();
    this.search();
  }
  show = () => {
    this.get(`${this.api.showsLibrary}`, "").then((res) => {
      // console.log(res.data);
      this.setState({
        tabs: res.data.map((item) => {
          return {
            id: item.id,
            title: item.name,
          };
        }),
      });
    });
  };

  search = () => {
    this.get(`${this.api.search}`, { id: 35 }).then((res) => {
      // console.log(res.data.list);
      this.setState({
        datalist: res.data.list.map((item) => {
          return {
            img: item.pic,
            title: item.intro,
            time: item.end_show_time,
            price: item.min_price,
          };
        }),
      });
    });
  };

  onSelect = (e) => {
    switch (e.key) {
      case "1":
        this.props.history.replace("/home");
        break;
      case "2":
        this.props.history.replace("/mine");
        break;
    }
  };

  render() {
    // const sidebar = (<List>
    //   {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
    //     if (index === 0) {
    //       return (<List.Item key={index}
    //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //         multipleLine
    //       >Category</List.Item>);
    //     }
    //     return (<List.Item key={index}
    //       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
    //     >Category{index}</List.Item>);
    //   })}
    // </List>);

    return (
      <div className="show_style">
        <NavBar
          className="shoe_top"
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: "currentColor" }}
              visible={this.state.visible}
              overlay={[
                <Item key="1">主页</Item>,
                <Item key="2">我的聚橙</Item>,
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0 15px",
                  marginRight: "-15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>,
          ]}
        >
          演出
        </NavBar>

        <div>
          {/* 全国补丁 */}
          <div className="occlusion">
            <span onClick={this.onOpenChange}>
              |&nbsp;&nbsp;&nbsp;全国{" "}
              <img
                src="https://s3.ax1x.com/2021/01/26/sOjp8S.png"
                width="12px"
              ></img>
            </span>
          </div>
          <Tabs
            onTabClick={(e) => {
              // console.log(e.id);
              let param = {
                category: e.id,
              };
              (() => {
                this.get(`${this.api.search}`, param).then((res) => {
                  // console.log(res.data.list);
                  this.setState({
                    datalist: res.data.list.map((item) => {
                      return {
                        img: item.pic,
                        title: item.intro,
                        time: item.end_show_time,
                        price: item.min_price,
                      };
                    }),
                  });
                });
              })();
            }}
            className="tabs_style"
            tabs={this.state.tabs}
            renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
          >
            <WingBlank size="lg">
              <WhiteSpace size="lg" />
              <div className="show_bottom">
                {this.state.datalist.map((item) => {
                  return (
                    <Block
                      img={item.img}
                      title={item.title}
                      time={item.time}
                      price={item.price}
                    />
                  );
                })}
              </div>
            </WingBlank>
          </Tabs>
        </div>

        {/* <div className="drawer_style">
        <Drawer
          className="my-drawer"
          position='right'
          // touch='true'
          // style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle='false'
          // contentStyle={{
          //   color: "#A6A6A6",
          //   textAlign: "center",
          //   paddingTop: 42,
          // }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
        </Drawer>
        </div> */}
      </div>
    );
  }
}

export default Show;
