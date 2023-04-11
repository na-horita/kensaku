import React from "react";
const ScrapeSideList = ({ length,total,color,message,discountTotal,rate }) => {
  return (
    <>
      <h4>品数【{length}点】</h4>
      <p>
        <span style={{ color, fontWeight: "bold" }}>
          合計{discountTotal.toLocaleString("ja-JP")}円
        </span>
        <br />
        {rate > 0 && (
          <>
            <span style={{ textDecoration: "line-through" }}>
              元価格{total.toLocaleString("ja-JP")}円
            </span>
            <br />
          </>
        )}
        {message}
      </p>
    </>
  );
};

export default React.memo(ScrapeSideList);
