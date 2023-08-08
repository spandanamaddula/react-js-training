
import React, { useState } from 'react';

const SimpleComponent = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (a) => {
    a.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const newUser = {
      name,
      number
    };

    setUsers([...users, newUser]);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2>Simple Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(a) => setName(a.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Number: </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(a) => setNumber(a.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <h3>Registered Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleComponent;







