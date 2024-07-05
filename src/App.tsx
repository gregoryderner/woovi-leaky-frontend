import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [pixKey, setPixKey] = useState('');
  const [value, setValue] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleTransaction = async () => {
    try {
      const response = await axios.post('http://localhost:3000/graphql', {
        query: `
          mutation {
            initiatePixTransaction(pixKey: "${pixKey}", value: ${value})
          }
        `
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { errors, data } = response.data;

      if (errors) {
        setError(errors[0].message);
        setMessage('');
      } else {
        setMessage(data.initiatePixTransaction);
        setError('');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.message || 'An error occurred';
        setError(errorMessage);
      } else {
        setError('An unexpected error occurred');
      }
      setMessage('');
    }
  };

  return (
    <div className="container">
      <h1>Pix Transaction</h1>
      <input type="text" value={pixKey} onChange={(e) => setPixKey(e.target.value)} placeholder="Pix Key" />
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" />
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Bearer Token" />
      <button onClick={handleTransaction}>Initiate Transaction</button>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
