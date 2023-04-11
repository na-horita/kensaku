import { useRecoilValue } from "recoil";
import React from "react";

import ScrapeSideList from "../components/ScrapeSideList";
import ScrapeSideTitle from "../components/ScrapeSideTitle";

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
      <ScrapeSideTitle length={length} total={total} color={color} message={message} discountTotal={discountTotal} rate={rate} />
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
