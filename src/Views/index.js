// import React, { Component } from "react";
// import { TabBar } from "antd-mobile";
// import Home from "./home";
// import Theater from "./theater";
// import Clip from "./clip";
// import Mine from "./mine";
// import "./index.scss";

// class Views extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: "blueTab",
//       hidden: false,
//       fullScreen: false,
//     };
//   }

  

//   render() {
//     return (
//       <div className="views_style" style={{ position: "fixed", height: "100vh", width: "100%", top: 0 }}>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="#33A3F4"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           <TabBar.Item
//             title="首页"
//             key="Life"
//             icon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://s3.ax1x.com/2021/01/21/shiiB8.png) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selectedIcon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://s3.ax1x.com/2021/01/21/shPYOf.png) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selected={this.state.selectedTab === 'blueTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'blueTab',
//               });
//             }}
//             data-seed="logId"
//           >
//             <Home />
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <div
//                 style={{
//                   width: "22px",
//                   height: "22px",
//                   background:
//                     "url(https://s3.ax1x.com/2021/01/21/shiENQ.png) center center /  21px 21px no-repeat",
//                 }}
//               />
//             }
//             selectedIcon={
//               <div
//                 style={{
//                   width: "22px",
//                   height: "22px",
//                   background:
//                     "url(https://s3.ax1x.com/2021/01/21/shie9s.png) center center /  21px 21px no-repeat",
//                 }}
//               />
//             }
//             title="剧院"
//             key="Koubei"
//             selected={this.state.selectedTab === "redTab"}
//             onPress={() => {
//               this.setState({
//                 selectedTab: "redTab",
//               });
//             }}
//             data-seed="logId1"
//           >
//            <Theater />
//           </TabBar.Item>
//           <TabBar.Item
//             icon={{
//               uri:
//                 "https://s3.ax1x.com/2021/01/21/shiDED.png",
//             }}
//             selectedIcon={{
//               uri:
//                 "https://s3.ax1x.com/2021/01/21/shic8A.png",
//             }}
//             title="票夹"
//             key="Friend"
//             selected={this.state.selectedTab === "yellowTab"}
//             onPress={() => {
//               this.setState({
//                 selectedTab: "yellowTab",
//               });
//             }}
//           >
//            <Clip component={Clip} />
//           </TabBar.Item>
//           <TabBar.Item
//             icon={{
//               uri:
//                 "https://s3.ax1x.com/2021/01/21/shiggI.png",
//             }}
//             selectedIcon={{
//               uri:
//                 "https://s3.ax1x.com/2021/01/21/shifDf.png",
//             }}
//             title="我的"
//             key="my"
//             selected={this.state.selectedTab === "greenTab"}
//             onPress={() => {
//               this.setState({
//                 selectedTab: "greenTab",
//               });
//             }}
//           >
//             <Mine />
//           </TabBar.Item>
//         </TabBar>
//       </div>
//     );
//   }
// }

// export default Views;
