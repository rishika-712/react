import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='parent'>
            <h2>UseEffectEx</h2>
            {
                users.map((user, index) => (
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default UseEffectEx;
n