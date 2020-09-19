import React from 'react';
import {Link} from 'react-router-dom';


const UserDisplay = (props)=>{

const renderuser = ({userData})=>{
    if(userData){
        return userData.map((item,index)=>{
           return(
               <tr>
                   <td>{index}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.role}</td>
               </tr>
           ) 
        })
    }
}


   return(
       <div>
           <h4>List Of Users</h4>
           <table className="table">
               <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderuser(props)}
                </tbody>
              </table>
       </div>
   )
}


export default UserDisplay;

