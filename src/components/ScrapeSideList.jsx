import React from "react";
const ScrapeSideList = ({ item }) => {
  return (
    <div>
      <p>
        ●{item.title}
        <br />
        価格: {item.price}円<br />
        商品数【{item.num}個】
      </p>
    </div>
  );
};

export default React.memo(ScrapeSideList);
