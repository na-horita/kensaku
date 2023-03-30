import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function FrequentsList() {
  const [frequents, setFrequents] = useState([]);

  useEffect(() => {
    fetchFrequents(); // 初回のデータ取得
    const interval = setInterval(fetchFrequents, 5000); // 5秒ごとにデータ取得

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされた時にインターバルを解除
    };
  }, []);

  const fetchFrequents = () => {
    fetch("http://localhost:3000/api/frequent")
      .then((response) => response.json())
      .then((data) => {
        setFrequents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
        >
          {frequent.word}
        </Button>
      ))}
    </div>
  );
}

export default FrequentsList;
