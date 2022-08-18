import React, {useState, useEffect} from"react";
import Tweet from "./Tweet";

function App(){
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100)
  }, []);

  
  const [users, setUsers] = useState([
    {name: "name1", message: "happy"},
    {name: "name2", message: "healthy"},
    {name: "name3", message: "lucky"}
  ]);

  return (
    <div className="app">
      <h1>Hello React</h1>
      
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>

      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;