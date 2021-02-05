import React, { Component } from "react";
import { ListView, WingBlank, WhiteSpace } from "antd-mobile";
import Block from "../../../components/block";
import { withRouter } from "react-router-dom";

import "./index.scss";

class Homebottom extends Component {
  state = {
    id: [],
    data: [],
  };

  componentDidMount() {
    this.show();
  }
  show = () => {
    this.get(`${this.api.show}`, { page: 1 }).then((res) => {
      // console.log(res);
      this.setState({
        data: res.data.list,
      });
    });
  };

  render() {
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
        </WingBlank>
      </div>
    );
  }
}

export default withRouter(Homebottom);
