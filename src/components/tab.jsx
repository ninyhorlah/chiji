import React from 'react'
import keyword from '../asset/keyword.png'
import location from '../asset/location.png'
import remote from '../asset/remote.png'
import design from '../asset/design.png'
import contract from '../asset/contract.png'
import GigContent from './gigContent'

const InnerTab = () => {
    return ( 
        <div className='gigContent'>
            <div className="gigBtn">
                <h4>Gigs</h4>

                <button className="addGig">New gig +</button>
            </div>

            {/* tab header */}

            <div className='tabList'>
                <ul className="nav nav-pills  d-flex justify-content-between pt-4 " id="pills-tab" role="tablist" >
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All gigs <span className='gigNum active'>3404</span> </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">My gigs <span className='gigNum'>1200</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Rejected gigs <span className='gigNum'>800</span></button>
                    </li>
                </ul>
            </div>
            {/* end of tab header */}

            {/* Filter section */}

            <div className="filterSec">
                <div className='filterInner'>
                    <span>Freelance</span>
                </div>
                <div className='filterInner'>
                   
                        <img src={keyword} alt="" />
                    
                   <span>Keywords</span>
                   
                    <i class="fas fa-angle-down"></i>
                    
                </div>
               <div className='filterInner'>
                   
                        <img src={location} alt="" />
                    
                   <span>Location</span>
                   
                   <i class="fas fa-angle-down"></i>
                   
                </div>
                <div className='filterInner'>
                    <img src={remote} alt="" />
                    <span>Remote friendly</span>
                </div>
                <div className='filterInner filterActive'>
                    <img src={design} alt="" />
                    <span>Design</span>
                   <i class="fas fa-check"></i>
                </div>
                <div className='filterInner'>
                    <img src={contract} alt="" />
                    <span>Contract</span>
                </div>
            </div>

            {/* End of filter section */}

            {/* tab content */}
            <div className="tab-content tabCont" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <GigContent/>
                </div>
                
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
            {/* end of tab content */}
        </div>
     );
}
 
export default InnerTab;