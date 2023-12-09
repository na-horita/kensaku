import { useEffect, useState } from "react";
import { set, get } from "idb-keyval";
import { Photo } from "../ts/photo"; 

const defaultPhoto: Photo[] = [
  {
    created_at: "2010-01-01T01:01:01Z",
    height: 5472,
    id: 1785502,
    link: "https://www.pexels.com/photo/man-standing-on-cliff-1785502/",
    photographer: "Kasuma",
    source: "Pexels",
    url: "https://images.pexels.com/photos/1785502/pexels-photo-1785502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    width: 3648,
  },
  {
    id: "vcRHpfrsaL8",
    width: 3024,
    height: 4032,
    created_at: "2020-05-25T02:10:58Z",
    link: "https://unsplash.com/photos/vcRHpfrsaL8",
    photographer: "Omar Ram",
    source: "Unsplash",
    url: "https://images.unsplash.com/photo-1590372648787-fa5a935c2c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDczNjZ8MHwxfHNlYXJjaHwxNnx8c2t5fGVufDB8fHx8MTY5NTYyNDMyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

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
