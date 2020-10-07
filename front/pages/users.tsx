import { useEffect, useState } from "react";

const test = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then(setUsers)
    }, [])
    return (<div>
        {users.map(user => <div>{user.name}:{user.email}</div>)}
    </div>)
}

export default test;