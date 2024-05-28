// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div className="App">
                {user && <Header />}
                <Routes>
                    <Route
                        path="/login"
                        element={<Login setUser={setUser} />}
                    />
                    <Route
                        path="/user/:userId"
                        element={user ? <MainContent user={user} /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/"
                        element={<Navigate to={user ? `/user/${user.id}` : '/login'} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
