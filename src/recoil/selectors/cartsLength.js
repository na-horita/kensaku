import { selector } from 'recoil';
import cartState from '../atoms/cartState';

const cartsLength = selector({
  key: 'arrayLengthSelector',
  get: ({ get }) => {
    const array = get(cartState);
    return array.length;
  },
});

export default cartsLength;