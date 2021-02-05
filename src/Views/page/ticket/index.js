import React, { Component } from "react";
import "./index.scss";
import TabbarrShowStore from "../../../Redux/TabbarrShow/store";
import { NavBar, Icon, Card, Button, WhiteSpace } from "antd-mobile";
export default class Ticket extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.schedule();

    TabbarrShowStore.dispatch({
      type: "Hide",
      payload: true,
    });
  }

  schedule = () => {
    let pathname = this.props.location.pathname;
    pathname = pathname.replace("/ticket/", "");

    let param = {
      schedular_id: pathname,
    };
    this.get(`${this.api.schedule}`, param).then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data.static_data,
      });
    });
  };

  render() {
    // console.log(this.props.location.pathname);
    //   console.log(this.props.location);
    // console.log(this.state.data);
    return (
      <div className="ticket_style">
        <NavBar
          className="ticket_top"
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
          rightContent={[<Icon type="ellipsis" />]}
        >
          演出详情
        </NavBar>

        <div className="ticket_content">
          <Card full className="ticket_card">
            <Card.Body>
              <div className="card_outer">
                <img src={this.state.data.pic}></img>
                <div className="card_innter">
                  <span>{this.state.data.show_name}</span>
                  <span>
                    ¥{this.state.data.low_price}-{this.state.data.high_price}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <WhiteSpace size="lg" />
          <Card full style={{ textAlign: "left" }}>
            <Card.Header
              title="电子票"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            />
            <Card.Body>
              <div style={{ fontSize: "20px", color: "#666666" }}>
                2019.10.15 - 2021.09.30 &gt;
              </div>
              <br />
              <div>{}</div>
              <br />
              <div style={{ fontSize: "2px", color: "#666666" }}>
                常州市新北区通江中路与常澄路交叉路口往西北约100米(江南环球港)
              </div>
              <br />
            </Card.Body>
            <Card.Footer content="橙PLUs卡" />
          </Card>

          <NavBar
            className="card_bottom"
            mode="light"
            icon={<div>客服</div>}
            onLeftClick={() => console.log("onLeftClick")}
          >
            <Button type="primary">立刻购买</Button>
          </NavBar>
        </div>
      </div>

      // {this.state.data}
    );
  }
}
