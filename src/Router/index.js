import React from "react";
// import { HashRouter, Route, Switch,Router, } from "react-router-dom";
import { Router, Route,} from "react-router-dom";
// import {IndexRedirect} from 'react-router';
import Home from "../Views/home";
import Theater from "../Views/theater";
import Clip from "../Views/clip";
import Mine from "../Views/mine";
import Show from "../Views/page/show";
import Ticket from "../Views/page/ticket";
import Tabbarr from "../components/tabbarr";
import { createHashHistory } from "history";
const history = createHashHistory();

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
      
        
          {/* <Route path="/" component={Tabbarr} exact render={() => <Redirect to="/home" />} /> */}
          <Route path="/" component={Tabbarr}  />
          {/* <IndexRedirect to='/home' /> */}
          <Route path="/home" component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/clip" component={Clip} />
          <Route path="/mine" component={Mine} />
          <Route path="/show" component={Show} />
          <Route path="/ticket" component={Ticket} />
          {/* <Route path="/ticket" component={Ticket} /> */}
         
        {/* <Tabbarr /> */}
      </Router>
    );
  }
}
export default Routes;

// const Routes = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/theater",
//     component: Theater,
//   },
//   {
//     path: "/clip",
//     component: Clip,
//   },
//   {
//     path: "/mine",
//     component: Mine,
//   }
// ]
//   export default Routes;

// class Routes extends React.Component {
//   render() {
//     return (
//       <HashRouter>
//         <Switch>

//             <Route path="/" component={Tabbar} />
//             <Route path="/home" component={Home} />
//             <Route path="/theater" component={Theater} />
//             <Route path="/clip" component={Clip} />
//             <Route path="/mine" component={Mine} />
//             {/* </Route> */}

//         </Switch>
//         <Tabbar />
//       </HashRouter>
//     );
//   }
// }

// export default Routes;
