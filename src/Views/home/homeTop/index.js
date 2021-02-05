import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import './index.scss';
class Hometop extends Component {
  render() {
    return (
      <div className="hometop_style">
        <NavBar
      mode="light"
      onLeftClick={() => console.log("首页")}
      leftContent={[
      <img  src="https://s3.ax1x.com/2021/01/20/sRc7M4.png" width="20px"/>,
      <span className='spantop'>全国</span>
      ]}
      rightContent={ 
        <img src="https://s3.ax1x.com/2021/01/20/sRqIW4.png" width="20px"/>
      }
    > <input type="text" placeholder="         搜索热门演出" className="input_style"></input>
    </NavBar>
       
       
      </div>
    )
  }
}

export default Hometop