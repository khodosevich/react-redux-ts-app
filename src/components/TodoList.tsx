import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchTodos, setTodoPage } from "../store/actios-creators/todo";
import { useActions } from "../hooks/useAction";


const TodoList: React.FC = () => {

    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()

    const dispatch = useDispatch()

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    return (
        <div>

            {error && <h1>{error}</h1>}

            {
                loading
                    ? <h1>Loading...</h1>
                    : <>
                        {todos.map(item => <div key={item.id}>{item.id} - {item.title}</div>)}

                        <div
                            style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "red" }}
                        >
                            {
                                pages.map(p => (
                                    <div
                                        style={{ color: p === page ? "green" : "", padding: "10px", border: "1px solid black", cursor: "pointer" }}
                                        onClick={() => setTodoPage(p)}
                                    >
                                        {p}
                                    </div>
                                ))
                            }
                        </div>
                    </>

            }



        </div>
    )
}


export default TodoList;