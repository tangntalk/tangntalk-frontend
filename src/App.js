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

        <Route exact path="/user/:user_id" component={withRouter(MainPage)} />
        <Route exact path="/search/:user_id" component={withRouter(SearchPage)} />

        <Route exact path="/around/:user_id" component={withRouter(AroundPage)} />
        <Route exact path="/setting/:user_id" component={withRouter(SettingPage)} />

        <Route exact path="/chat/:user_id" component={withRouter(ChatListPage)} />
        <Route exact path="/chatting/:user_id/:opponent" component={withRouter(ChattingPage)} />
        {/* chatting별 아이디 처리 */}
      </Switch>
    </Router>

  );
}

export default App;
