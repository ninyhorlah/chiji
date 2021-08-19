import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/nav/sideBar";
import TopNav from "./components/nav/topNav";
import InnerTab from "./components/tab";
import BasicData from "./components/basicData";
import Renumeration from "./components/renumeration";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <SideBar />
        <Switch>
          <Route exact path="/" component={InnerTab} />
          <Route path="/basic-data" component={BasicData} />
          <Route path="/renumeration" component={Renumeration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
