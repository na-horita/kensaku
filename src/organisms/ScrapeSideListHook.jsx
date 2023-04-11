import { useRecoilValue } from "recoil";
import React from "react";

import ScrapeSideList from "../components/ScrapeSideList";

import cartState from "../recoil/atoms/cartState";
import couponCountSelector from "../recoil/selectors/couponCountSelector";

const ScrapeSideListHook = () => {
  const carts = useRecoilValue(cartState);
  const cartsVariat = useRecoilValue(couponCountSelector);

  return (
    <>
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

export default React.memo(ScrapeSideListHook);
