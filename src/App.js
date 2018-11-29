import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch} from "react-router-dom";
import Home from "./components/home";
import My from "./components/my";
// import Order from "./components/order";
import List from "./components/list";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/my" component={My}/>
            {/* <Route path="/order" component={Order}/> */}
            <Route path="/list" component={List}/>
            <Route path="/" component={Home}/>
          </Switch>
          <div id="footer">
            <ul>
              <li>
                <NavLink to="/home">首页</NavLink>
              </li>
              <li>
                <NavLink to="/my">我的</NavLink>
              </li>
              {/* <li> */}
                {/* <NavLink to="/order">订单</NavLink> */}
              {/* </li> */}
              <li>
                <NavLink to="/list">列表</NavLink>
              </li>
            </ul>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
