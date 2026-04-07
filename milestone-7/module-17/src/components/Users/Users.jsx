import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
const users = useLoaderData();
console.log(users);

    return (
        
        <div>
            
            <NavLink to="/users/userid">User Id</NavLink>
        
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }

        </div>
    );
};

export default Users;