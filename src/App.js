import React, {useState} from 'react'
import './App.css'

function App(props) {
  const [Todo, setTodo] = useState('') // single todo 
  const [TodoList, setTodoList] = useState([]) //list of all todos


  return (
    <div className="todo-page">
      <center>
        <div className="header">
            <h1> TODO LIST </h1> 
        </div>
        <div className="item-list">
          <div className="current-item">
              <span>
                <input type='text' value={Todo} placeholder='Add your TODO'
                  onChange={ (e)=>setTodo(e.target.value) }  />
              </span>
              <button onClick={ ()=>setTodoList([...TodoList, {id: Date.now(), text:Todo, status:false }]) } className='addButton'> + </button>
          </div>
          <br />

          {/* Map is a fn that is used to go through all elements in an array
              Here we are using map to print values in the array  */}
          {TodoList.map( (value)=>{
            return(
              <ul className="saved-item">
              <li>
                {/* checkbox */}
                <input type='checkbox' value={value.status}
                  onChange={ (e)=>{
                    console.log(e.target.checked)
                    console.log(value)
                    setTodoList( 
                      TodoList.filter(obj =>{
                        if (obj.id === value.id){
                          obj.status = e.target.checked
                        }
                        return obj
                      })
                    )
                  }}
                />
                <span>{value.text}</span>
                <button className='delButton'
                  onClick={ ()=> {
                    console.log('Clicked del button')
                    setTodoList(TodoList.filter(item => item.id !== value.id ))
                  }}
                > X </button>
              </li>
              </ul>
            )
          })}

          <h1>Items Done</h1>
          {TodoList.map( (item)=>{
            if (item.status){
              return ( <h2>{item.text}</h2> )
            }
            return null
          }
          )}
        </div>
        </center> 
    </div>
  );
}

export default App;

