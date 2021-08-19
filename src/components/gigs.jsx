import React from 'react'
import SideBar from './nav/sideBar'
import TopNav from './nav/topNav';
import InnerTab from './tab';

const Gigs = () => {
    return ( 
        <div>
            <TopNav />
            <SideBar/>

            <InnerTab/>
        </div>
     );
}
 
export default Gigs;