import { useRecoilValue } from "recoil";
import React from "react";

import ScrapeSideList from "../components/ScrapeSideList";
import cartState from "../recoil/atoms/cartState";
import cartsLength from "../recoil/selectors/cartsLength";
import couponCountSelector from "../recoil/selectors/couponCountSelector";
import totalSelector from "../recoil/selectors/totalSelector";

const ScrapeSide = () => {
  const carts = useRecoilValue(cartState);
  const length = useRecoilValue(cartsLength);
  const cartsVariat = useRecoilValue(couponCountSelector);
  const total = useRecoilValue(totalSelector);

  return (
    <>
      <h4>品数【{length}点】</h4>
      <p style={{color:"#ff00ee", fontWeight : 'bold'}}>合計{total}</p>
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