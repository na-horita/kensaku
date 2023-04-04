import { selector } from "recoil";
import cartState from "../atoms/cartState";

const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    const total = cart.reduce((acc, cart) => acc + cart.price, 0);
    return total;
  },
});

export default totalSelector;
