import { useRecoilValue } from 'recoil';
import cartState from '../recoil/atoms/cartState';
import cartsLength from '../recoil/selectors/cartsLength';
import couponCountSelector from '../recoil/selectors/couponCountSelector';

const ScrapeSide = () => {
  const carts = useRecoilValue(cartState);
  const length = useRecoilValue(cartsLength);
  const cartsVariat = useRecoilValue(couponCountSelector);

  return (
    <>
      <h4>合計【{length}個】</h4>
        {carts.length !== 0 && (
        <div>
          {cartsVariat.map((item,index) => (
            <div key={index}>
              <p>・{item.title}<br />
                価格: {item.price}円<br />
                商品数【{item.num}個】</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ScrapeSide;
