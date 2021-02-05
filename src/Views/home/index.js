import React, { Component } from 'react'
import Hometop from './homeTop';
import Homecentre from './homeCentre';
import Homedown from './homeDown';
import Homebottom from './homeBottom';
import TabbarrShowStore from "../../Redux/TabbarrShow/store";
import "./index.scss";



class Home extends Component {

    componentDidMount() {
      TabbarrShowStore.dispatch({
        type: "Show",
        payload: false,
      });
    }

  render() {
    return (
      <div className="homestyle">
        <Hometop />
        <Homecentre />
        <Homedown /> 
        <Homebottom/>
      </div>
    )
  }
}

export default Home