import { useState } from "react";
import "./App.css";

function App() {
  //  const [todos,setTodos] = useState ([])
  //  const [todo, setTodo]= useState()
  //  const submitHandle =(e) => {
  // e.preventDefault ()
  // setTodos([...todos,todo])
  // setTodo('')

  //  }

  // return(

  // <>
  // <h2>useReduse</h2>

  // <form onSubmit={submitHandle}>
  //   <input type="text"  value={todo} onChange= { e => setTodo(e.target.value)}/>
  //   <button type="submit">EKLE</button>
  // </form>

  // <ul>
  //   {todos.map((todo,index)=>{return(<li key={index}>{todo}</li>)})}
  // </ul>
  //)
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };

  return (
    <>
      <h1> useReduce finnal coding</h1>

      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button disabled={!todo} type="submit">
          Add TODO
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}> {todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
