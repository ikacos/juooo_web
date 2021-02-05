import React, { Component} from "react";
import { TabBar } from "antd-mobile";
import TabbarrShowStore from "../Redux/TabbarrShow/store";
// import Home from "../Views/home";
// import { NavLink } from "react-router-dom";
// import Theater from "../Views/theater";
// import Clip from "../Views/clip";
// import Mine from "../Views/mine";
import "./tabbarr.scss";


class Tabbarr extends Component {
  state = {
    hidden: false,
  };
 
  render() {
    TabbarrShowStore.subscribe(() => {
      this.setState({
        hidden: TabbarrShowStore.getState().isShow,
      });
    });

    let pathname = window.location.hash;
    return (
      <div
        className="tabbar_style"
        // style={{ position: "fixed",bottom:' 0px', height: "100vh", width: "100%",}}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          // noRenderContent="true"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://s3.ax1x.com/2021/01/21/shiiB8.png) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://s3.ax1x.com/2021/01/21/shPYOf.png) center center /  21px 21px no-repeat",
                }}
              />
            }
            // selected={this.state.selectedTab === "blueTab"}
            // onPress={() => {
            //   this.setState({
            //     selectedTab: "blueTab",
            //   });
            // }}
            selected={pathname === "#/home"}
            onPress={() => {
              this.props.history.replace("/home");
            }}
            data-seed="logId"
          >
            {/* <Home /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://s3.ax1x.com/2021/01/21/shiENQ.png) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://s3.ax1x.com/2021/01/21/shie9s.png) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="剧院"
            key="Koubei"
            selected={pathname === "#/theater"}
            
            onPress={() => {
              this.props.history.replace("/theater");
            }}
            // selected={this.state.selectedTab === "redTab"}
            // onPress={() => {
            //   this.setState({
            //     selectedTab: "redTab",
            //   });
            // }}
            data-seed="logId1"
          >
            {/* <Theater /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri: "https://s3.ax1x.com/2021/01/21/shiDED.png",
            }}
            selectedIcon={{
              uri: "https://s3.ax1x.com/2021/01/21/shic8A.png",
            }}
            title="票夹"
            key="Friend"
            // selected={this.state.selectedTab === "yellowTab"}
            // onPress={() => {
            //   this.setState({
            //     selectedTab: "yellowTab",
            //   });
            // }}
            selected={pathname === "#/clip"}
            onPress={() => {
              this.props.history.replace("/clip");
            }}
          >
            {/* <Clip  />  */}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri: "https://s3.ax1x.com/2021/01/21/shiggI.png",
            }}
            selectedIcon={{
              uri: "https://s3.ax1x.com/2021/01/21/shifDf.png",
            }}
            title="我的"
            key="my"
            // selected={this.state.selectedTab === "greenTab"}
            // onPress={() => {
            //   this.setState({
            //     selectedTab: "greenTab",
            //   });
            // }}
            selected={pathname === "#/mine"}
            onPress={() => {
              this.props.history.replace("/mine");
            }}
          >
            {/* <Mine /> */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tabbarr;
