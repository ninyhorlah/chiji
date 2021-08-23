import React from 'react'
import logo from '../../asset/logo.png'
import dashboard from '../../asset/dashboardLogo.png'
import gigs from '../../asset/gigsIcon.png'
import company from '../../asset/companyIcon.png'
import account from '../../asset/accountIcon.png'
import './nav.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return ( 
        <div className='sidebarContainer'>
            <Link to='/' >
                <img src={logo} alt="" />
            </Link>
            <ul>
                <li><img src={dashboard} alt="" title='Dashboard'/> <span>Dashboard</span></li>
                <Link to='/' className='text-decoration-none'>
                    <li className='activeBar '><img src={gigs} alt="" title='Gigs'/> <span>Gigs</span></li>
                </Link> 
                <li><img src={company} alt="" title='Company'/> <span>Company</span></li>
                <li><img src={account} alt="" title='Account'/> <span>Account</span></li>
            </ul>
        </div>
     );
}
 
export default SideBar;