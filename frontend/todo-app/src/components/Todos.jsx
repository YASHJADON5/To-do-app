

export function Todos({todos}){
    
    return <div>
          {todos.map(function(todo){
            //  console.log('completed:', todo.completed); // Add this line
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button >{todo.completed===true ? "completed" : "mark as complete"}</button>
                </div>
          })}
    </div>
}