import React from 'react';
import './User.css'
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, phone, email, id} = user;
    return (
        <div className='card'>
            <h2>Name: {name}</h2>
            <h3>Name: {email}</h3>
            <h3>Name: {phone}</h3>
            
            <Link to={`/users/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default User;