import axios from 'axios';
import React, { useState } from 'react';

const Upload = () => {
  const [name, setname] = useState('');
  const [location, setlocation] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setrating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, location, price, rating };

    try {
      const response = await axios.post('http://localhost:3000/api/upload', payload, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 201) {
        alert("Data uploaded successfully");
        // Reset form
        setname('');
        setlocation('');
        setPrice(0);
        setrating(0);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" required value={name} onChange={(e) => setname(e.target.value)} />
        <input type="text" placeholder="Enter your location" required value={location} onChange={(e) => setlocation(e.target.value)} />
        <input type="number" placeholder="Enter your price" required value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <input type="number" placeholder="Enter your rating" required value={rating} onChange={(e) => setrating(Number(e.target.value))} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
