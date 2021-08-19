import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicData from './basicData';
import SideBar from './nav/sideBar'
import TopNav from './nav/topNav';
import InnerTab from './tab';

const Gigs = () => {
    return ( 
        <div>
            
            <Router>
                <Switch>
                    <TopNav />
                     <SideBar/>
                    <Route exact path="/" component={InnerTab} />
                    <Route path="/basic-data" component={BasicData} />
                </Switch>
            </Router>
        </div>
     );
}
 
export default Gigs;