import { useRecoilValue } from "recoil";
import React from "react";

import ScrapeSideList from "../components/ScrapeSideList";
import cartState from "../recoil/atoms/cartState";
import cartsLength from "../recoil/selectors/cartsLength";
import couponCountSelector from "../recoil/selectors/couponCountSelector";
import totalSelector from "../recoil/selectors/totalSelector";
import discountSelector from "../recoil/selectors/discountSelector";

const ScrapeSide = () => {
  const carts = useRecoilValue(cartState);
  const length = useRecoilValue(cartsLength);
  const cartsVariat = useRecoilValue(couponCountSelector);
  const total = useRecoilValue(totalSelector);
  const { rate, color, message, discountTotal } =
    useRecoilValue(discountSelector);
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
      {carts.length !== 0 && (
        <div>
          {cartsVariat.map((item, index) => (
            <ScrapeSideList item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(ScrapeSide);
