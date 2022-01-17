import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const Friends = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }

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
            {/* <p>ID: <Link to={`/friend/${id}`}>Show Detail Of {id}</Link></p> */}
            <button onClick={() => handleClick(id)}>Click Me For Detail</button>
        </div>
    );
};

export default Friends;