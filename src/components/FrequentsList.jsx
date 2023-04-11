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
    fetch("https://kensaku-express.vercel.app/api/frequent")
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
      {frequents.map((frequent, index) => (
        <Button
          variant="outline-dark"
          className="mx-1"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => handleClick(frequent.word)}
        >
          {frequent.word}
        </Button>
      ))}
    </div>
  );
}

export default FrequentsList;
