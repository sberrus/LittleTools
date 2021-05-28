import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Pages
import Main from "./Main";
import Twodo from "./toolset/Twodo";

const LittleTools = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/little-tools" exact>
                        <Main />
                    </Route>
                    <Route path="/little-tools/twodo">
                        <Twodo />
                    </Route>
                    <Redirect to="/little-tools"></Redirect>
                </Switch>
            </div>
        </Router>
    );
};

export default LittleTools;
