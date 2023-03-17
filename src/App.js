import {  useReducer, useState } from "react";
import "./App.css";

function reducer (state,action) {
switch (action.type){
  case 'SET_TODO' : {
    return {
      ...state,
      todo: action.value
    }
  }
case 'ADD_TODO': {
  return {
...state, 
  todos :[state.todos , action.todo]

  }
}


}



}





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


const submitHandle = e => {
  e.preventDefault ()
  //setTodos([...todos , todo])
 // setTodo ('')
dispatch ({
  type: 'ADD_TODO',
  todo : state.todo
})

}

const [state,dispatch ]=useReducer(reducer, {

  todos : [],
  todo : ''

})

const onChange = e => {
  dispatch ({
    type : 'SET_TODO',
    value: e.target.value
  })
}
return (
<>
 
<h1>MY FIRST TODO LIST APP</h1>
<form onSubmit={submitHandle}>
  <input type="text"  value={state.todo} onChange={onChange} />
  <button disabled={!state.todo} type="submit">ADD TODO</button>
</form>

<ul>
  {state.todos.map ((todo,index)=> (
    <li key={index}>{todo}</li>
  ))}
</ul>


</>

)




}

export default App;
