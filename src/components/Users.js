import React, { Component ,Fragment} from 'react'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from './Detail';


export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://demo9197058.mockable.io/users")
          .then(res => res.json())
          .then(
              
            (result) => {
                console.log(result);
                
              this.setState({
                isLoaded: true,
                items: result
              });
              console.log(this.state);
              
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            
              
            <Fragment>
          
            <div className="container">
            <Router>
        
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
          {items.map(({id,age,first_name,company_name,city,email}, index) => {
            return (
          <tr key={index}>
           
            <td>{id}</td>
            <td><Link to={`/details/${id}`}>{first_name}</Link></td>
            <td>{email}</td>
            <td>{age}</td>
            <td>{company_name}</td>
            <td>{city}</td>
        
          </tr> 
            )
          })}
               
      
        </tbody>
      </table>
      
      <Route exact path={`/details/:id`} component={Detail} />
      </Router>
    </div>
    
            </Fragment>
          );
        }
      }
}
