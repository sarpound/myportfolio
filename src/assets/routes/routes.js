import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../viewers/Home";
import SIIT from "../viewers/SiitGate";
import AntiCovid from "../viewers/AntiCovid";
import NotFound from "../components/notFound"
import Cursor from "../cursor";
import { isDesktop } from "react-device-detect";
const Routes = () => (
  <>
    {isDesktop ? <Cursor /> : ""}
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/siitgate" component={SIIT} />
        <Route path="/anticovid" component={AntiCovid} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);
export default Routes;
