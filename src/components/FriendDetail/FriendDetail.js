import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friendDetail, setFriendDetail] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setFriendDetail(data))
    }, [])
    const { name, phone, email, website } = friendDetail;
    return (
        <div>
            <h4>This Is Friend Detail Component {friendId}</h4>
            <h1>Name: {name}</h1>
            <p>Phone: {phone}</p>
            <h2>Email: {email}</h2>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default FriendDetail;