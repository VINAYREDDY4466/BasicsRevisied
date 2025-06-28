import React, { useContext, useState } from 'react';
import { userContext } from '../context/storeContext';

const Display = () => {
  const { data } = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [lick, setLick] = useState(false);

  const filteredData = data.filter(item => {
    const name = item.name || item.random?.name || '';
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div style={{ padding: '20px' }}>
      {/* Search Bar and Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter a name you want to fetch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '300px',
            padding: '8px',
            border: '1px solid #333',
            borderRadius: '4px',
            marginRight: '10px',
            fontSize: '16px'
          }}
        />
        <button
          onClick={() => setLick(true)}
          style={{
            padding: '8px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      {/* Results */}
      {lick ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredData.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <p><strong>{item.name || item.random?.name}</strong></p>
              <img
                src={item.image || `https://picsum.photos/200/150?random=${index}`}
                alt="Random"
                style={{ width: '100%', borderRadius: '4px', marginBottom: '10px' }}
              />
              <p>Price: {item.price || 'Not available'}</p>
              <p>Rating: {item.rating || 'N/A'}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: 'center', color: '#888' }}>No data</h2>
      )}
    </div>
  );
};

export default Display;
