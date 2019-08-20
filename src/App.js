import React,{Component,Fragment} from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList'

class  App extends Component {

  state = {
    userLists: [],
    error: null,
    isLoaded: false,
  }
 
  componentDidMount() {
    fetch("http://demo9197058.mockable.io/users")
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isLoaded: true,
        userLists: result.slice(0,5)
      });
      
    })
  }
  getUsers = async (e) => {
    const searchTextVal= e.target.elements.searchText.value;
    e.preventDefault();
    console.log(searchTextVal);
    // this.setState({userLists: [], isLoaded: false,});
    const api_call = await fetch("http://demo9197058.mockable.io/users");
    const data = await api_call.json();
    console.log(data)
    const user = data.filter(v => v.first_name.toLowerCase().indexOf(searchTextVal.toLowerCase()) > -1).slice(0, 5);
    console.log(user);
    
    this.setState({userLists: user,isLoaded: true,});
    
    
  }
  render() {
    
    const { isLoaded, userLists } = this.state;
    console.log(this.state)
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
         return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Users</h1>
      </header>
      <Form getUsers={this.getUsers} />
      <UserList users={userLists}/>
      

    </div>
  );
      }
  }
}

export default App;
