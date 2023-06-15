import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { setUser } from './userActions';
import { useNavigate } from 'react-router-dom';

const UserModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = { name, email };
      dispatch(setUser(user));
      navigate('\introduction');
    };
    

  return (
    <div>
      <h2>User Modal</h2>
      <Link to="/"></Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserModal;
