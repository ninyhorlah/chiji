import React from 'react'
import logo from '../../asset/logo.png'
import dashboard from '../../asset/dashboardLogo.png'
import gigs from '../../asset/gigsIcon.png'
import company from '../../asset/companyIcon.png'
import account from '../../asset/accountIcon.png'
import './nav.css'

const SideBar = () => {
    return ( 
        <div className='sidebarContainer'>
            <a href="#"><img src={logo} alt="" /></a>
            <ul>
                <li><img src={dashboard} alt="" /> Dashboard</li>
                <li className='activeBar'><img src={gigs} alt="" /> Gigs</li>
                <li><img src={company} alt="" /> Company</li>
                <li><img src={account} alt="" /> Account</li>
            </ul>
        </div>
     );
}
 
export default SideBar;