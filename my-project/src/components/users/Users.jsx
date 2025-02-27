import React, { useEffect, useState } from 'react';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.slice(0, 6)))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <section className="users">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </section>
    );
};

export default Users;
