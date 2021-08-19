import React from 'react'
import sortIcon from '../asset/sortIcon.png'

const GigContent = () => {
    return ( 
        <div className='allGigHide'>

            <div className='gigContentInner'>
                <div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div>
                    <div className='gigHead'>
                        <p>Role</p>
                    </div>
                    <p>Product Designer</p>
                </div>
                 <div>
                     <div className='gigHead'>
                        <p>Company</p>
                    </div>
                    <p>TM30</p>
                </div>
                <div className='gigHide'>
                    <div className='gigHead'>
                        <p>Date <span><img src={sortIcon} alt="" /></span></p>
                    </div>
                    <p>20th, June 2020</p>
                </div>
                <div className='gigHide'>
                    <div className='gigHead'>
                        <p>Salary($) <span><img src={sortIcon} alt="" /></span></p>
                    </div>
                    <p>20,000 - 30,000</p>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
     );
}
 
export default GigContent;