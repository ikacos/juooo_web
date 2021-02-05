import React, { Component } from 'react'
import TabbarrShowStore from "../../Redux/TabbarrShow/store";
import "./index.scss";



class Clip extends Component {
  componentDidMount() {
    TabbarrShowStore.dispatch({
      type: "Show",
      payload: false,
    });
  }
  render() {
    return (
      <div className="clip_style">
        夹子 
      </div>
    )
  }
}

export default Clip