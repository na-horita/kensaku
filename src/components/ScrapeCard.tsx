import React from "react";

const ScrapeCard = ({ title, url, img, price, addBookHandler }:any) => {
  const truncatedTitle = title.slice(0, 30) + (title.length > 30 ? "..." : "");

  return (
    <div className="scrape-card">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt="scraped image" />
      </a>
      <div className="scrape-card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h5 className="scrape-card-title">{truncatedTitle}</h5>
        </a>
        <p className="scrape-card-description">
          {price.toLocaleString("ja-JP")}円
        </p>
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
