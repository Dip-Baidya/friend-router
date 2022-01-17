import React from 'react';

const Friends = (props) => {
    const { name, email } = props.friend;

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
        </div>
    );
};

export default Friends;