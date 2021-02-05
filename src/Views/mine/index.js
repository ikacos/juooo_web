import React, { Component } from 'react'
import TabbarrShowStore from "../../Redux/TabbarrShow/store";
import "./index.scss";



class Mine extends Component {

  componentDidMount() {
    TabbarrShowStore.dispatch({
      type: "Show",
      payload: false,
    });
  }
  
  render() {
    return (
      <div className="mine_style"> 
        我的
      </div>
    )
  }
}

export default Mine