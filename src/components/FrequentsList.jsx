import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

function FrequentsList() {
  const [frequents, setFrequents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/frequents")
      .then((response) => response.json())
      .then((data) => {
        setFrequents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

function handleClick(keyword) {
  window.location.href = `/?keyword=${keyword}`;
}

  return (
    <div>
      {frequents.map((frequent) => (
        <Button
variant="outline-dark"
className="mx-1"
style={{ cursor: "pointer" }}
key={frequent.id}
onClick={() => handleClick(frequent.word)}
>{frequent.word}
</Button>
      ))}
    </div>
  );
}

export default FrequentsList;