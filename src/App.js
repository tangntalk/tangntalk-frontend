import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import LoginPage from "../src/pages/login";
import RegisterPage from "../src/pages/register";

import MainPage from "../src/pages/main";
import SearchPage from "../src/pages/search";

import ChatListPage from "../src/pages/chatList";
import ChattingPage from "../src/pages/chatting";

import AroundPage from "../src/pages/around";
import SettingPage from "../src/pages/setting";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={withRouter(LoginPage)} />
        <Route exact path="/register" component={withRouter(RegisterPage)} />

        <Route exact path="/user" component={withRouter(MainPage)} />
        <Route exact path="/search" component={withRouter(SearchPage)} />

        <Route exact path="/around" component={withRouter(AroundPage)} />
        <Route exact path="/setting" component={withRouter(SettingPage)} />

        <Route exact path="/chat" component={withRouter(ChatListPage)} />
        <Route exact path="/chatting" component={withRouter(ChattingPage)} />
        {/* chatting별 아이디 처리 */}
      </Switch>
    </Router>

  );
}

export default App;
