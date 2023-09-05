import React from "react";
const ScrapeSideList = ({ item }: any) => {
  const itemTitle = item.title.slice(0, 17) + (item.title.length > 17 ? "..." : "");
  return (
    <div style={{ borderBottom: "1px solid #999", marginBottom: "5px" }}>
      <p>
        <span style={{ fontSize: "12px" }}>{itemTitle}</span>
        <br />
        価格: {item.price}円<br />
        商品数【{item.num}個】
      </p>
    </div>
  );
};

export default React.memo(ScrapeSideList);
