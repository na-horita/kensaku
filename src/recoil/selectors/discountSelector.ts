import { selector } from "recoil";
import totalSelector from "./totalSelector";

const discountSelector = selector({
  key: "discountSelector",
  get: ({ get }) => {
    const total = get(totalSelector);

    if (total >= 60000) {
      return {
        rate: 0.3,
        color: "#F05550",
        message: "30% off",
        discountTotal: total * 0.7,
      };
    } else if (total >= 40000) {
      return {
        rate: 0.2,
        color: "#F89214",
        message: "20% off",
        discountTotal: total * 0.8,
      };
    } else if (total >= 20000) {
      return {
        rate: 0.1,
        color: "#9AD4D6",
        message: "10% off",
        discountTotal: total * 0.9,
      };
    } else {
      return {
        rate: 0,
        color: "#999",
        message: "",
        discountTotal: total,
      };
    }
  },
});

export default discountSelector;
