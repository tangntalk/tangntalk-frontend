import './App.css';

import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authorized, isModal, modalComment } from './recoil/atom';

import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

import MainPage from "./pages/main";
import SearchPage from "./pages/search";

import ChatListPage from "./pages/chat";
import ChattingPage from "./pages/chatting";

import AroundPage from "./pages/around";
import SettingPage from "./pages/setting";

import TestPage from "./pages/test";

import Alert from "./components/Alert";

function App() {
  const authorization=useRecoilValue(authorized);

  const setModal=useSetRecoilState(isModal);
  const setModalComment=useSetRecoilState(modalComment);

  if (authorization==='unauthorized'){
    setModal(true);
    setModalComment('로그인이 만료되었습니다');
  }

  return (
      <>
      <Alert></Alert>
      <Router>
        <Switch>
          {(authorization==='false'||authorization==='unauthorized')&&
          <>
          <Route exact path="/" component={withRouter(LoginPage)} />
          <Route exact path="/register" component={withRouter(RegisterPage)} />
          <Route component={() => <Redirect to="/"/>}/>
          </>
          }

          {authorization==='true'&&
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
        </Switch>
      </Router>
      </>
  );
}

export default App;
