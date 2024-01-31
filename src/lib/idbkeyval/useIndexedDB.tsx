import { useEffect, useState } from "react";
import { set, get } from "idb-keyval";
import { Photo } from "../../ts/photo"; 
import { defaultPhoto } from "./defaultPhoto";

const INEDEXED_KEY = "hopes";

export function useIndexedDB(): [Photo[] | null, (val: Photo[] | null) => void] {
  const [value, setValue] = useState<Photo[] | null>(null);

  useEffect(() => {
    get(INEDEXED_KEY).then((val) => {
      function isPhotoArray(arg: Photo[]|undefined): arg is Photo[] {
        return Array.isArray(arg);
      }

      if (isPhotoArray(val)) {
        setValue(val);
      } else {
        setValue(defaultPhoto);
        save(defaultPhoto);
      }
    });

  }, [setValue]);

  const save = (val: Photo[] | null) => {
    // 引数の型を修正
    set(INEDEXED_KEY, val).then(() => {
      setValue(val);
    });
  };

  return [value, save];
}
