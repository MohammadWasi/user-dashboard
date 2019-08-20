import React  from 'react';

const Form = (props) => (
   <form onSubmit={props.getUsers} style={{ marginTop: '20px' }}>
       <input type="text" className="searchinput" name="searchText"></input>
       <button type="button" className="btn btn-info">Search</button>
   </form>
);

export default Form;