import React, {useState} from 'react'
import './App.css'

function TodoApp(props) {
  const [Todo, setTodo] = useState('') // single todo 
  const [TodoList, setTodoList] = useState([]) //list of all todos

  // function to add todos in the array onclicking the addButon
  const TodoAddButton = ()=>setTodoList(
    [...TodoList, {id: Date.now(), text:Todo, status:false }] 
  )

  // function to print the todos from the todolist array
  // Map is a fn that is used to go through all elements in an array
  // Here we are using map to print values in the array
  const TodoItems = TodoList.map( (item, pos)=>{
    return (
        <ul className="saved-item" key={pos} >
        <li>
            {/* checkbox */}
            <input type='checkbox' value={item.status}
            onChange={ (e)=>{
                console.log(e.target.checked)
                console.log(item)
                setTodoList( 
                TodoList.filter(obj =>{
                    if (obj.id === item.id){
                    obj.status = e.target.checked
                    }
                    return obj
                })
                )
            }}
            />
            <span>{item.text}</span>
            <button className='delButton'
            onClick={ ()=> {
                console.log('Clicked del button')
                setTodoList(TodoList.filter(value => item.id !== value.id ))
            }}
            > X </button>
        </li>
        </ul>
    )
  } )
 
  // function to print items in the todolist that are done (checked)
  const TodoItemsDone = TodoList.map( (item)=>{
    if (item.status){
      return ( <h2>{item.text}</h2> )
    }
    return null
  }
  )

  return (
    <div className="todo-page">
      <div className="header">
          <h1> TODO LIST </h1> 
      </div>
      <div className="item-list">
        <div className="current-item">
            <span>
              <input type='text' value={Todo} placeholder='Add your TODO'
                onChange={ (e)=>setTodo(e.target.value) }  />
            </span>
            <button onClick={ TodoAddButton } className='addButton'> + </button>
        </div>
        <br />
        {TodoItems}
        <h1>Items Done</h1>  { TodoItemsDone }
      </div>
    </div>
  );
}

export default TodoApp;

