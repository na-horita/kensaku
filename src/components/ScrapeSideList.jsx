import { memo } from "react";

const ScrapeSideList = memo(({ item, index }) => {
  return (
    <>
      <div key={index}>
        <p>
          ●{item.title}
          <br />
          価格: {item.price}円<br />
          商品数【{item.num}個】
        </p>
      </div>
    </>
  );
});

export default ScrapeSideList;