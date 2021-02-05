import React, { Component } from "react";
import { Carousel, WingBlank, Card, WhiteSpace } from "antd-mobile";
import "./index.scss";

class Homedown extends Component {
  state = {
    data: [
      {
        img: "https://s3.ax1x.com/2021/01/22/sInNXF.jpg",
        title: "南平大剧院喜迎新春·大型歌舞晚会《盛世欢腾》-南平站",
        discount: "5",
      },
      {
        img: "https://s3.ax1x.com/2021/01/22/sIGODP.jpg",
        title: "【小橙堡】浪漫经典童话剧《美女与野兽》-舟山站",
        discount: "7",
      },
      {
        img: "https://s3.ax1x.com/2021/01/22/sIJ93j.jpg",
        title: "【小橙堡】浪漫经典童话剧《灰姑娘》-舟山站",
        discount: "5",
      },
    ],

    // data:["s5rsF1", "s5rTYt", "s5rL6S", "s5s0c8", "s5soB4"],
  };
  //   componentDidMount() {
  //     this.setState({
  //       data: ["s5rsF1", "s5rTYt", "s5rL6S", "s5s0c8", "s5soB4"],
  //     });
  //   }

  // https://s3.ax1x.com/2021/01/22/sIGODP.jpg
  // https://s3.ax1x.com/2021/01/22/sIJ93j.jpg
  render() {
    return (
      <div className="Homedown_style">
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card className="card_style">
            <Card.Header
              title={<span style={{ "font-size": "3px" }}>会员享折扣</span>}
              thumb="https://s3.ax1x.com/2021/01/22/sIEPXj.png"
              thumbStyle={{ width: "18px" }}
              extra={<span style={{ "font-size": "3px" }}>99元/年</span>}
            />
            <Card.Body>
              <Carousel autoplay={true} infinite>
                {this.state.data.map((item) => (
                  <div className="card_carousel">
                    <div className="card_outer">
                      <img src={item.img}></img>
                      <div className="card_innter">
                        <span className="span_first">{item.title}</span>
                        <div className="card_span">
                          <span>
                            <span>{item.discount} </span>折起
                          </span>
                          <span>立即抢购</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <div className="xunhui_style">
            <span>&nbsp;巡回演出</span>
            <span>全部&gt;&nbsp;</span>
          </div>
          <WhiteSpace size="lg" />
          <Card className="xunhui_card">
            <Card.Body>
              <Carousel autoplay={true} infinite>
                {this.state.data.map((item) => (
                  <div className="card_carousel" key>
                    <div className="card_outer">
                      <img src={item.img}></img>
                      <div className="card_innter">
                        <span>2019.03.06 - 2021.04.06</span>
                        <span style={{ textAlign: "left" }}>
                        {item.title}
                        </span>
                        <span>¥ {item.discount}0 起</span>
                        <span>3城巡演 舟山 | 苏州 | 安康</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </WingBlank>
      </div>
    );
  }
}

export default Homedown;
