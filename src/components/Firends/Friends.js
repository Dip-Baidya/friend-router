import React from 'react';
import { Link } from "react-router-dom";

const Friends = (props) => {
    const { name, email, id } = props.friend;

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }

    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h4>Email:{email}</h4>
            <p>ID: <Link to={`/friend/${id}`}>Show Detail Of {id}</Link></p>
        </div>
    );
};

export default Friends;