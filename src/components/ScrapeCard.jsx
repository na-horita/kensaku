import React from "react";

const ScrapeCard = ({ title, url, img, price }) => {
const truncatedTitle = title.slice(0, 30) + (title.length > 30 ? "..." : "");

  return (
    <div className="scrape-card">
      <a href={url} target="_blank">
        <img src={img} alt="scraped image" />
      </a>
      <div className="scrape-card-content">
        <a href={url} target="_blank">
          <h5 className="scrape-card-title">{truncatedTitle}</h5>
        </a>
        <p className="scrape-card-description">{price}円</p>
      </div>
    </div>
  );
};

export default ScrapeCard;