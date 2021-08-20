import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';

class BasicData extends Component {
    render(){
        return(
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
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className='basicDataCont'>
                                <div className="data1 ">
                                     <div >
                                        <label htmlFor="">Role</label>
                                        <input type="text" placeholder='Product Designer'/>
                                    </div>
                                    <div className='data1_'>
                                        <label htmlFor="">Company</label>
                                        <input type="text" placeholder='TM30'/>
                                    </div>
                                </div>
                                <label className='pt-4' htmlFor="">Location</label>
                                <div className='data1'>
                                    <select name="" id="">
                                        <option value="">Country</option>
                                        <option value="">State</option>
                                    </select>
                                    <select name="" id="" className='data1_'>
                                        <option value="">State/Region</option>
                                        <option value="">Origin</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" placeholder='Address'/>
                                </div>
                                <div className='dataTags'>
                                    <h6>Add Tags</h6>

                                    <Multiselect
                                        displayValue="key"
                                        onRemove={this.onRemove}
                                        onSearch={this.onSearch}
                                        onSelect={this.onSelect}
                                        options={[
                                            {
                                            key: 'Remote'
                                            },
                                            {
                                            key: 'Full time'
                                            },
                                            {
                                            key: 'Contract'
                                            }
                                        ]}
                                        selectedValues={[
                                            {
                                            key: 'Remote'
                                            }
                                        ]}
                                        placeholder='Add more tags'
                                        style={{
                                            chips:{
                                            background: '#FBB30B '
                                        }
                                        }}
                                        />

                                    <small>Suggested tags: <span>full time </span> <span>Contract</span> <span>Freelance</span></small>
                                </div>

                                <div className="dataBtn">
                                    <Link to='/'>
                                        <button>Cancel</button>
                                    </Link>
                                    <span className='dataBtnCol'><button >Continue</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                           <div className="basicDataCont">
                                <label htmlFor="">Salary</label>
                                <div className=' d-flex'>
                                    <div><input type="text" placeholder='Minimum'/></div>
                                    <div className='mx-2'><input type="text" placeholder='Maximum'/></div>
                                </div>

                                 <div className="dataBtn mt-4">
                                    <button>Back</button>
                                    <span className='dataBtnCol'><button >Add gig</button></span>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
    }
   
}
export default BasicData;