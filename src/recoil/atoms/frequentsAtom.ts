import { atom } from "recoil";
import { Frequent } from "../../ts/frequent";

export const frequentsAtom = atom<Frequent[]>({
  key: "frequentsAtom",
  default: [
    {
      id: 2,
      name: "Jane Smith",
      word: "shooting star",
    },
    {
      id: 3,
      name: "Alex saisa",
      word: "banquet",
    },
    {
      id: 4,
      name: "yamashita takashi",
      word: "urban",
    },
  ],
});

