import { selector } from "recoil";
import cartState from "../atoms/cartState";

const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const cart: any = get(cartState);
    const total: any = cart.reduce((acc: any, cart: any) => acc + cart.price, 0);
    return total;
  },
});

export default totalSelector;
