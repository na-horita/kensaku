import { useLayoutEffect, useState } from "react";
import { set, get } from "idb-keyval";
import { Photo } from "../ts/photo"; 

const INEDEXED_KEY = "hopes";

export function useIndexedDB(): [Photo[] | null, (val: Photo[]) => void] {
  const [value, setValue] = useState<Photo[] | null>(null);

  useLayoutEffect(() => {
    get(INEDEXED_KEY).then((val) => {
      if (val !== null) {
        setValue(val);
      }
    });
  }, [value]);

  const save = (val: Photo[] | null) => {
    // 引数の型を修正
    set(INEDEXED_KEY, val).then(() => {
      setValue(val);
    });
  };

  return [value, save];
}
