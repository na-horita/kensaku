import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrapeCard from "../components/ScrapeCard";
import ScrapeSide from "../components/ScrapeSide";

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
    price: 1200,
    img: "https://dummyimage.com/600x400/000/fff",
    url: "https://news.yahoo.co.jp/"
  },
  {
    title: "タイトル2",
    price: 2300,
    img: "https://dummyimage.com/600x400/000/fff",
    url: "https://news.yahoo.co.jp/"
  },
  {
    title: "タイトル3",
    price: 3500,
    img: "https://dummyimage.com/600x400/000/fff",
    url: "https://news.yahoo.co.jp/"
  },
  {
    title: "タイトル4",
    price: 4500,
    img: "https://dummyimage.com/600x400/000/fff",
    url: "https://news.yahoo.co.jp/"
  }
];

  return (
    <div className="container">
      <div className="left-column">
      <h2>楽天商品検索（ドローン）</h2>
        <div className="card-container">
          {cards.map((drone, index) => (
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
            <ScrapeSide />
      </div>
    </div>
  );
};

export default Scrape;