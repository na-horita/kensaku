import { atom } from "recoil";

const couponState = atom({
  key: "couponState",
  default: [],
});

export default couponState;
