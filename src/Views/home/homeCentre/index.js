import React, { Component } from "react";
import { Carousel, WingBlank, Grid } from "antd-mobile";
import "./index.scss";
import { Link } from "react-router-dom";
// import axios from 'axios';


class Homecentre extends Component {

  state = {
    data: [],
    datalist:[
    //   {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWswtK.png",
    //   text: `演唱会`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsr1e.png",
    //   text: `音乐剧`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsN01.png",
    //   text: `舞台剧`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWstmR.png",
    //   text: `儿童剧`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsG6J.png",
    //   text: `音乐会`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsDpD.png",
    //   text: `欢聚橙卡`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsG6J.png",
    //   text: `橙PLUS卡`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWs0fO.png",
    //   text: `VIP+专区`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsDpD.png",
    //   text: `积分兑换`,
    // },
    // {
    //   icon: "https://s3.ax1x.com/2021/01/20/sWsdk6.png",
    //   text: `闪购`,
    // }
  ],
  };

  componentDidMount() {
    this.home()
}
home = () => {
    this.get(`${this.api.home}`, '').then( res => {
      // console.log( res);
      this.setState({
        datalist: res.data.classify_list.map((item)=>{
          return {
            text: item.name,
            icon: item.pic,
            id:item.category_id,
          }
        }),
        data: res.data.slide_list.map((item)=>item.image_url,
        )
      });
    })
}

// gridClick=(e)=>{
//   console.log(e.id);
// }
  
 
  render() {
     
    return (
      <div className="homecentre_style">
        <br />
        <WingBlank >
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map((item,index) => (
              <div
                key={index}
                >
                <img 
                  className="carousel_img"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </WingBlank>

        <Grid onClick={this.gridClick} columnNum={5}  data={this.state.datalist}  hasLine={false} itemStyle={{ height: '13vh'}}
        renderItem={dataItem => (
        // <div 
        // onClick={() => {
        //   this.props.history.replace("/show");
        // }}
        // >
        <div>

          <Link to="/show">
          <img src={dataItem.icon} style={{ height: '7vh' }} alt="" />
          <div style={{ color: '#888', fontSize: '12%',  }}>
            <span>{dataItem.text}</span>
          </div>
          </Link>
          </div>
  
      )} 
      />
      </div>
    );
  }
}

export default Homecentre;
