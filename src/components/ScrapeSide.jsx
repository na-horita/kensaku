import { useRecoilValue } from 'recoil';
import cartState from '../recoil/atoms/cartState';

const ScrapeSide = () => {
  const cart = useRecoilValue(cartState);

  return (
    <>
        <h3>右側のカラム</h3>
        {cart.length !== 0 && (
        <div>
          {cart.map((item,index) => (
            <div key={index}>
              <p>Title: {item.title}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ScrapeSide;
