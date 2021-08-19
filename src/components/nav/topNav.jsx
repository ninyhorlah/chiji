import React from 'react'
import notification from '../../asset/notification.png'
import email from '../../asset/email.png'
import settings from '../../asset/settings.png'
import profile from '../../asset/profile.png'

const TopNav = () => {
    return ( 
        <div className='topNavContainer'>
            <div className='searchBar'>
                <i class="fas fa-search"></i>
                <input type="text" placeholder='Search'/>
            </div>
            <div className='navItem'>
                <img src={notification} alt="" title='notification'/>
                <img src={email} alt="" title='email'/>
                <img src={settings} alt="" title='settings'/>
                <img src={profile} alt="" title='profile'/>
            </div>
        </div>
     );
}
 
export default TopNav;