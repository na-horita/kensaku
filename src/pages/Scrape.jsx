import React from "react";

import ScrapeCardHook from "../organisms//ScrapeCardHook";
import ScrapeSideTitleHook from "../organisms/ScrapeSideTitleHook";
import ScrapeSideListHook from "../organisms/ScrapeSideListHook";

const Scrape = () => {

  return (
    <div className="container">
      <div className="left-column">
        <h2>楽天商品検索（ドローン）</h2>
        <div className="card-container">
          <ScrapeCardHook />
        </div>
      </div>
      <div className="right-column">
        <div style={{ marginBottom: "22px" }}>
          <ScrapeSideTitleHook />
        </div>
        <div className="ScrapeSideList">
          <ScrapeSideListHook />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Scrape);
