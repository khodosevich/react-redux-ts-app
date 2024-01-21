import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{width:"1200px" , margin:"0 auto"}}>
          <UserList />
          <hr></hr>
          <TodoList/>
    </div>
  );
}

export default App;
