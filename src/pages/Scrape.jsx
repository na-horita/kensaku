import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrapeCard from "../components/ScrapeCard";

const Scrape = () => {
  const [drones, setDrones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://kensaku-express.vercel.app/api/rakuten');
      //console.log(result.data);
      setDrones(result.data);
    };

    fetchData();
  }, []);

const cards = [
  {
    title: "タイトル1",
    price: "1000円",
    image: "https://dummyimage.com/600x400/000/fff"
  },
  {
    title: "タイトル2",
    price: "2000円",
    image: "https://dummyimage.com/600x400/000/fff"
  },
  {
    title: "タイトル3",
    price: "3000円",
    image: "https://dummyimage.com/600x400/000/fff"
  },
  {
    title: "タイトル3",
    price: "3000円",
    image: "https://dummyimage.com/600x400/000/fff"
  }
];

  return (
    <div className="container">
      <div className="left-column">
      <h2>楽天商品検索（ドローン）</h2>
        <div className="card-container">
          {drones.map((drone, index) => (
            <ScrapeCard
              key={index}
              title={drone.title}
              price={drone.price}
              img={drone.img}
              url={drone.url}
            />
          ))}
        </div>
      </div>
      <div className="right-column">
        <h2>右側のカラム</h2>
        <p>ここにコンテンツを入れます。</p>
      </div>
    </div>
  );
};

export default Scrape;
