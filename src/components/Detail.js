import React from 'react'
import {Link} from 'react-router-dom';

class Detail extends React.Component {

    render() {
        console.log(this.props)
        const user = this.props.location.currUser;
        console.log(user)
        return (
        <div className="container">
            <div className="row">
                <Link to="/">
        <button type="button" className="btn btn-light">Back</button></Link>
        </div>
            <div className="row">
                <h1>{user['first_name']} {user['last_name']}</h1>
            </div>
            <div className="row">
            
            <table>
                <tbody>
            <tr>
    <td>Company</td>
    
    <td>{user['company_name']}</td>
  </tr>
  <tr>
    <td>City</td>

    <td>{user['city']}</td>
  </tr>
  <tr>
    <td>State</td>
    
    <td>{user['state']}</td>
  </tr>
  <tr>
    <td>Zip</td>
    
    <td>{user['zip']}</td>
  </tr>
  <tr>
    <td>Email</td>
     
    <td>{user['email']}</td>
  </tr>
  <tr>
    <td>Web</td>
    
    <td>{user['web']}</td>
  </tr>
  <tr>
    <td>Age</td>
    
    <td>{user['age']}</td>
  </tr>
  </tbody>
            </table>
            </div>
            
        </div>
        );
    }
}

export default Detail;
