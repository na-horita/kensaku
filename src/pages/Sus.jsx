import { useRecoilValue } from 'recoil';
import cartsLength from '../recoil/selectors/cartsLength';

const Sus = () => {
  const length = useRecoilValue(cartsLength);

  return (
    <div>
      <p>商品数【{ length }個】</p>
    </div>
  );
};

export default Sus;
