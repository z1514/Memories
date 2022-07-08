import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from "gapi-script";

const App = () => {
    // 2022 update for google api authentication
    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "562430011934-1bg5jjo79n52ikf3au8dsik83lvvloga.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <NavBar />
                <Switch>
                    {/* show home here */}
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;