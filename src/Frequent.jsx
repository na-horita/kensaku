import React, { useState, useEffect } from 'react';


const Frequent = () => {

  const [frequents, setFrequents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/frequents')
      .then((response) => response.json())
      .then((data) => setFrequents(data));
  }, []);

  return (
    <div>
      <h3>良く検索される一覧</h3>
      <ul>
        {frequents.map((frequent) => (
          <li key={frequent.id}>
            {/* <h4>{frequent.name}</h4> */}
            <p>{frequent.word}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frequent;