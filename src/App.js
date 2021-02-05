import './App.css';
import Home from './Views/home';
 import Clip from './Views/clip';
import Views from './Views';
import Routes from "./Router/index";

function App() {
  return (
    <div className="App">
      {/* <Views /> */}
      <Routes/>
      {/* <Clip /> */}
    </div>
  );
}

export default App;
