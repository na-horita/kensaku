import { useState, useEffect } from "react";
import FrequentsList from "../../components/frequent/FrequentsList";
import { useNavigate } from "react-router-dom";

function FrequentsListHook() {
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

  const handleClick = (keyword: string): (() => void) => {
    const navigate = useNavigate();
    return () => {
      navigate(`/?keyword=${keyword}`, { state: { keyword } });
    };
  };

  return (
    <>
      {frequents.map((frequent, index) => (
        <FrequentsList
          frequent={frequent}
          key={index}
          handleClick={handleClick}
        ></FrequentsList>
      ))}
    </>
  );
}

export default FrequentsListHook;
