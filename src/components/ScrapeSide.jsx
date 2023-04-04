import { useRecoilValue } from "recoil";

import ScrapeSideList from "../components/ScrapeSideList";
import cartState from "../recoil/atoms/cartState";
import cartsLength from "../recoil/selectors/cartsLength";
import couponCountSelector from "../recoil/selectors/couponCountSelector";

const ScrapeSide = () => {
  const carts = useRecoilValue(cartState);
  const length = useRecoilValue(cartsLength);
  const cartsVariat = useRecoilValue(couponCountSelector);

  return (
    <>
      <h4>合計【{length}個】</h4>
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

export default ScrapeSide;
