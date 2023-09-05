import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrapeCard from "../components/ScrapeCard";

import { useRecoilState } from "recoil";
import cartState from "../recoil/atoms/cartState";

const ScrapeCardHook = () => {
  const [drones, setDrones] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://kensaku-express.vercel.app/api/rakuten"
      );
      // console.log(result.data);
      setDrones(result.data);
    };

    fetchData();
  }, []);

  const [cart, setCart] = useRecoilState<any>(cartState);
  const addBookHandler: any = (title: any, price: any) => {
    setCart([...cart, { title, price }]);
  };

  // const cards = [
  //   {
  //     title: "タイトル1",
  //     price: 1200,
  //     img: "https://dummyimage.com/600x400/000/fff",
  //     url: "https://news.yahoo.co.jp/",
  //   },
  //   {
  //     title: "タイトル2",
  //     price: 2300,
  //     img: "https://dummyimage.com/600x400/000/fff",
  //     url: "https://news.yahoo.co.jp/",
  //   },
  //   {
  //     title: "タイトル3",
  //     price: 3500,
  //     img: "https://dummyimage.com/600x400/000/fff",
  //     url: "https://news.yahoo.co.jp/",
  //   },
  //   {
  //     title: "タイトル4",
  //     price: 4100,
  //     img: "https://dummyimage.com/600x400/000/fff",
  //     url: "https://news.yahoo.co.jp/",
  //   },
  //   {
  //     title: "タイトル5",
  //     price: 5800,
  //     img: "https://dummyimage.com/600x400/000/ccc",
  //     url: "https://news.yahoo.co.jp/",
  //   },
  // ];

  return (
    <>
      {drones.map((drone: any, index:any) => (
        <ScrapeCard
          key={index}
          title={drone.title}
          price={drone.price}
          img={drone.img}
          url={drone.url}
          addBookHandler={addBookHandler}
        />
      ))}
    </>
  );
};

export default React.memo(ScrapeCardHook);
