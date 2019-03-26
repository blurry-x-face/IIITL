import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./ContacUs";
import BoG from "./BoardGovernors";
import About from "./About";
import Senate from "./Senate";
import Cord from "./CordCommittee";

class Institute extends Component {
  render() {
    return (
      <Fragment>

        <Switch>
          <Route path="/institute/co-ordination-committee" exact component={Cord} />
          <Route path="/Senate" exact component={Senate} />
          <Route path="/About" exact component={About} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/board-governors" exact component={BoG} />
        </Switch>
      </Fragment>
    );
  }
}
export default Institute;
