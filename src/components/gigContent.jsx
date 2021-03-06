import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getUsers } from '../actions/users.action'

const GigContent = ({dispatch}) => {
    const[users, setUsers] = useState([])


     useEffect(() => {

        const fetchUsers = async() => {
        const response = await dispatch(getUsers())
        
        setUsers(response.data)
     }

         fetchUsers()
     }, [dispatch])
    return ( 
        <div className='allGigHide'>

            {users && users.length > 0 ? 
            <>
            <div className="gigContentInner gigHead">
                <div></div>
                <div><p>Name</p></div>
                <div><p>Company</p></div>
                <div className='gigHide'><p>City </p></div>
                <div className='gigHide'><p>Website </p></div>
                <div></div>
                
            </div>
             {users.map((user, index) => <div key={index} className='gigContentInner'>
                <div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div>
                    
                    <p>{user.name}</p>
                </div>
                 <div>
                    
                    <p>{user.company.name}</p>
                </div>
                <div className='gigHide'>
                    
                    <p>{user.address.city}</p>
                </div>
                <div className='gigHide'>
                    
                    <p>{user.website}</p>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>)}
            </> : <></>}
        </div>
     );
}
 
// export default GigContent;
const mapStateToProps = (state) => ({
    state
});
  
const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(GigContent);