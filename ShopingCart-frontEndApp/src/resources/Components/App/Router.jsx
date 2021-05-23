import React, { Component, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../../App';
import Store from '../../../Cart/Store';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact={true} path="/" component={App} /> */}
        <Route exact={true} path="/" component={Store} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
