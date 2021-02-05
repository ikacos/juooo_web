import React, { Component } from 'react'
import TabbarrShowStore from "../../Redux/TabbarrShow/store";
import "./index.scss";



class Theater extends Component {
  componentDidMount() {
    TabbarrShowStore.dispatch({
      type: "Show",
      payload: false,
    });
  }
  render() {
    return (
     <div className="theater_style"> 
        剧院
      </div>
    )
  }
}

export default Theater