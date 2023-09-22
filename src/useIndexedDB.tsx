import { useLayoutEffect, useState } from "react";
import { set, get } from "idb-keyval";

export function useIndexedDB(key:any) {
  const [value, setValue] = useState(null);

  useLayoutEffect(() => {
    get(key).then((val) => {
      if (val !== null) {
        setValue(val);
      }
    });
  }, [key]);

  const save = (val:any) => {
    set(key, val).then(() => {
      setValue(val);
    });
  };

  return [value, save];
}
