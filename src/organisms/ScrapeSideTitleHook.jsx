import { useRecoilValue } from "recoil";
import React from "react";

import ScrapeSideTitle from "../components/ScrapeSideTitle";

import cartsLength from "../recoil/selectors/cartsLength";
import totalSelector from "../recoil/selectors/totalSelector";
import discountSelector from "../recoil/selectors/discountSelector";

const ScrapeSideTitleHook = () => {
  const length = useRecoilValue(cartsLength);
  const total = useRecoilValue(totalSelector);
  const { rate, color, message, discountTotal } = useRecoilValue(discountSelector);
  return (
      <ScrapeSideTitle
        length={length}
        rate={rate}
        total={total}
        color={color}
        message={message}
        discountTotal={discountTotal}
      />
  );
};

export default React.memo(ScrapeSideTitleHook);
