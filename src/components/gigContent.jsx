import React from 'react'
import sortIcon from '../asset/sortIcon.png'

const GigContent = () => {
    return ( 
        <div>
            <div className='gigContentHeader'>
                <div>
                    <p>Role</p>
                </div>
                <div>
                    <p>Company</p>
                </div>
                <div>
                    <p>Date <span><img src={sortIcon} alt="" /></span></p>
                </div>
                <div>
                    <p>Salary(&dollar;) <span><img src={sortIcon} alt="" /></span></p>
                </div>
            </div>

            <div className='gigContentInner'>
                <div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div>
                    <p>Product Designer</p>
                </div>
                 <div>
                    <p>TM30</p>
                </div>
                <div>
                    <p>20th, June 2020</p>
                </div>
                <div>
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