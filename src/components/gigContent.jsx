import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import sortIcon from '../asset/sortIcon.png'
import { getUsers } from '../actions/users.action'

const GigContent = ({props}) => {
    const[users, setUsers] = useState([])

     fetchUsers = async() => {
        const response = await props.dispatch(getUsers())
        console.log(1111, response);
     }

     useEffect(() => {
         fetchUsers()
     }, [])
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
 
// export default GigContent;
mapStateToProps = (state) => ({
    getUsers: state.userReducer.getUsers,
});
  
mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(GigContent);