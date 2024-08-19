import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';
function Userdemo(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(data=>{
      setUsers(data);
      setLoading(false);
    })
    .catch(error=>{
      console.log(error);
      setLoading(false);
    });
  },[]);
  if(loading){
    return <h1>Loading...</h1>;
    }
    return(
      <div>
        <h1>List of Users in API</h1>
        <ul>
          {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}
ReactDOM.render(<Userdemo/>,document.getElementById("root"));  //ReactDOM.render(<Userdemo/