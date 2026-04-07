import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, website} = user;
    console.log(user);
    return (
        <div>
            <h3>{name}</h3>
            <h2>{website}</h2>
        </div>
    );
};

export default UserDetails;