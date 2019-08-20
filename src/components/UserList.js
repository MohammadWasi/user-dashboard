
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const UsersList = props => {
    const { users } = props;
    console.log(props);
    
    // if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    return (
        <Fragment>
          
        <div className="container">
        
        <div className="row">
    
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Company Name</th>
        <th>City</th>
        
      </tr>
    </thead>
    <tbody>
      {users.map(({id,age,first_name,company_name,city,email,last_name,state,zip,web}, index) => {
        return (
      <tr key={index}>
       
        <td>{id}</td>
        <td><Link to={{
            pathname: `/detail/${id}`,
            currUser: {id,age,first_name,company_name,city,email,last_name,state,zip,web}}}>{first_name}</Link> </td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{company_name}</td>
        <td>{city}</td>
    
      </tr> 
        )
      })}
           
  
    </tbody>
  </table>
  </div>
</div>

        </Fragment>
    
    );
    
 
}
export default UsersList;