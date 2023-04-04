import React from "react";
import { useRecoilState } from "recoil";
import cartState from "../recoil/atoms/cartState";

const ScrapeCard = ({ title, url, img, price }) => {
  const truncatedTitle = title.slice(0, 30) + (title.length > 30 ? "..." : "");

  const [cart, setCart] = useRecoilState(cartState);
  const addBookHandler = (title, price) => {
    setCart([...cart, { title, price }]);
  };

  return (
    <div className="scrape-card">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt="scraped image" />
      </a>
      <div className="scrape-card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h5 className="scrape-card-title">{truncatedTitle}</h5>
        </a>
        <p className="scrape-card-description">{price}円</p>
        <button
          onClick={() => {
            addBookHandler(title, price);
          }}
          style={{
            backgroundColor: "#33A35E",
            color: "#fff",
            borderRadius: "25px",
            marginBottom: "10px",
          }}
        >
          カートに追加
        </button>
      </div>
    </div>
  );
};

export default React.memo(ScrapeCard);
