import React from "react";
const ScrapeSideList = ({ item }) => {
  const itemTitle =
    item.title.slice(0, 17) + (item.title.length > 17 ? "..." : "");
  return (
    <div>
      <p>
        <span style={{ fontSize: "11px" }}>{itemTitle}</span>
        <br />
        価格: {item.price}円<br />
        商品数【{item.num}個】
      </p>
      <hr />
    </div>
  );
};

export default React.memo(ScrapeSideList);
