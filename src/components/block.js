import React, { Component } from "react";
import { Card, WingBlank } from "antd-mobile";
import "./block.scss";

class Block extends Component {
  render() {
    return (
      <div className="block_style"  onClick={this.props.linkToTicket}>
        <Card>
          <Card.Body className="blockcard_body">
          <img
                className="card_img"
                src={this.props.img}
              ></img>
            <span>
              <div>
                <img src="https://s3.ax1x.com/2021/01/26/sXzsAA.png"></img>
                {this.props.title}
              </div>
            </span>
            <span>{this.props.time}</span>
            <span><span>￥{this.props.price}&nbsp;</span><a>起</a></span>
          </Card.Body>
          <Card.Footer />
        </Card>
      </div>


//  <div className="block_style">
// <Card>
//   <Card.Body className="blockcard_body">
//   <img
//         className="card_img"
//         src="https://s3.ax1x.com/2021/01/26/sXHFe0.jpg"
//       ></img>
//     <span>
//       <div>
//         <img src="https://s3.ax1x.com/2021/01/26/sXzsAA.png"></img>
//         【演出延期】聚橙出品 | 世界经典原版音乐剧《猫》CATS-上海站
//       </div>
//     </span>
//     <span>2020.08.04 - 2021.08.05</span>
//     <span><span>￥99&nbsp;</span><a>起</a></span>
//   </Card.Body>
//   <Card.Footer />
// </Card>
// </div>

    );
  }
}

export default Block;
