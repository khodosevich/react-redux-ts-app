import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/actios-creators/user"
import { useDispatch } from "react-redux"
import { useActions } from "../hooks/useAction"

const UserList: React.FC = ( ) => {

    const { users, loading, error } = useTypedSelector(state => state.user)

    const {fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    },[])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default UserList