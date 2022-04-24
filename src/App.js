import './App.css';
import React, {useState} from "react";
import { useRecoilValue } from 'recoil';
import { authorized } from './recoil/atom';

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

import Alert from "../src/components/Alert";

function App() {
  const authorization=useRecoilValue(authorized);
  const [alertOpen, setAlertOpen]=useState(!authorization);

  return (
      <>
      {/* <Alert isOpen={alertOpen} setOpen={setAlertOpen}>로그인이 만료되었습니다</Alert> */}
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(LoginPage)} />
          <Route exact path="/register" component={withRouter(RegisterPage)} />

          {authorization&&
          <>
          <Route exact path="/accounts" component={withRouter(MainPage)} />
          <Route exact path="/search" component={withRouter(SearchPage)} />

          <Route exact path="/around" component={withRouter(AroundPage)} />
          <Route exact path="/setting" component={withRouter(SettingPage)} />

          <Route exact path="/chat" component={withRouter(ChatListPage)} />
          <Route exact path="/chatting/:opponent" component={withRouter(ChattingPage)} />

          <Route exact path="/test" component={withRouter(TestPage)} />

          <Route component={() => <Redirect to="/accounts"/>}/>
          </>
          }
          
          <Route component={() => <Redirect to="/"/>}/>
        </Switch>
      </Router>
      </>
  );
}

export default App;
