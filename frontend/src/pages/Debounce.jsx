import React, { useState, useEffect } from 'react';

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  // useEffect with debounce logic
  useEffect(()=>{
    const timer=setTimeout(()=>{
        setDebouncedValue(searchTerm)
    },2000);
    return ()=>{
        clearTimeout(timer);
    }
  },[searchTerm])

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search anything..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '20px' }}>
        ✅ Actual Input: <strong>{searchTerm}</strong>
      </p>
      <p>
        ⏱️ Debounced (500ms later): <strong>{debouncedValue}</strong>
      </p>
    </div>
  );
};

export default Debounce;