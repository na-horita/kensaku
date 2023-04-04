import { selector } from 'recoil';
import cartState from '../atoms/cartState';

const totalSelector = selector({
  key: 'totalSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    const total = cart.reduce((acc, cart) => acc + cart.price, 0);
    const formattedTotal = total.toLocaleString('ja-JP');
    return `${formattedTotal}円`;
  },
});

export default totalSelector;