import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import LoginPage from "../src/pages/login";
import RegisterPage from "../src/pages/register";

import MainPage from "../src/pages/main";
import SearchPage from "../src/pages/search";

import ChatListPage from "../src/pages/chat";
import ChattingPage from "../src/pages/chatting";

import AroundPage from "../src/pages/around";
import SettingPage from "../src/pages/setting";

import TestPage from "../src/pages/test";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={withRouter(LoginPage)} />
        <Route exact path="/register" component={withRouter(RegisterPage)} />

        <Route exact path="/accounts/:accountId" component={withRouter(MainPage)} />
        <Route exact path="/search/:accountId" component={withRouter(SearchPage)} />

        <Route exact path="/around/:accountId" component={withRouter(AroundPage)} />
        <Route exact path="/setting/:accountId" component={withRouter(SettingPage)} />

        <Route exact path="/chat/:accountId" component={withRouter(ChatListPage)} />
        <Route exact path="/chatting/:accountId/:opponent" component={withRouter(ChattingPage)} />

        <Route exact path="/test" component={withRouter(TestPage)} />

        <Route component={() => <Redirect to="/"/>}/>
      </Switch>
    </Router>

  );
}

export default App;
