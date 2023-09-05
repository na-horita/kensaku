import { selector } from "recoil";
import cartState from "../atoms/cartState";

const couponCountSelector = selector({
  key: "couponCountSelector",
  get: ({ get }) => {
    const carts = get(cartState);
    const clickedCardCount:any = {};

    carts.forEach((cart:any) => {
      const title = cart.title;
      if (!clickedCardCount[title]) {
        clickedCardCount[title] = {
          ...cart,
          num: 1,
        };
      } else {
        clickedCardCount[title].num += 1;
      }
    });

    return Object.values(clickedCardCount);
  },
});

export default couponCountSelector;
