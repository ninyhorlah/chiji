import React from 'react'
import { Link } from 'react-router-dom';


const Renumeration = () => {
    return ( 
         <div className='gigContent'>
            <div className="tabList"><h3>Gigs</h3></div>
            <div className='tabList basicData'>
                <h6>New gigs</h6>
                <div class="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3 basicDataInner" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fas fa-dot-circle"></i> Basic Data</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-dot-circle"></i> Renumeration</button>
                        
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                
                    
                        <div className="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <Renumeration/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Renumeration;