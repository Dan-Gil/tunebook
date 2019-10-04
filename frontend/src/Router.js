import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound.js';
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./pages/Dashboard";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayout exact path="/" component={Home} />
      <DefaultLayout exact path="/signup" component={Signup} />
      <DefaultLayout exact path="/login" component={Login} />
      <DefaultLayout exact path="/profile" component={Profile} />
      <DefaultLayout exact path="/dashboard" component={Dashboard} />
      <DefaultLayout component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
