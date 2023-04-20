/*global console*/
/*jshint esversion: 11  */
/*jshint strict:true */


// React and ReactDOM are loaded by the HTML page before this script
function App() {
  const [error, setError] = React.useState(null);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => setTodos(todos))
      // .then(todos => setTodos(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return (<div>Error: {error.message}</div>);
  } else if (!todos) {
    return(<div>Loading...</div>);
  } else {
    return(
      <div>
      <h2>Todo List</h2>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
        <tbody>
          {todos.map((todo) => (
              // <li key={todo.id}>{todo.title}</li>
              // const completed = ({todo.completed}) ? "Y" : "N";
              // const completed = todo.completed;
              <tr  key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{(todo.completed === null) ? "Y" : "N"}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  }
}

    // ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
