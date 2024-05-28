// UserProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/users/${userId}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setError('Không thể lấy thông tin người dùng');
                console.error(error);
            });
    }, [userId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Đang tải...</p>;
    }

    return (
        <div className="user-profile">
            <div className="profile-header">
                <img src={user.avatar} alt="Avatar" className="avatar" />
                <h2>{user.UserName}</h2>
                <p>{user.bio}</p>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Giới tính:</strong> {user.Gender}</p>
                <p><strong>Ngày sinh:</strong> {user.DateOfBirth}</p>
                <p><strong>Thành phố:</strong> {user.City}</p>
                <p><strong>Quốc gia:</strong> {user.Country}</p>
                <p><strong>Sở thích:</strong> {user.Interests.join(', ')}</p>
            </div>
        </div>
    );
};

export default UserProfile;
