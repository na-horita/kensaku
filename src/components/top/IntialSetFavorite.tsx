import { useEffect } from "react";
import { useIndexedDB } from "../../features/useIndexedDB";
import { Photo } from "../../ts/photo"; 

const aaa: Photo[] = [
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

const IntialSetFavorite = () => {
  const [hopes, setHopes] = useIndexedDB();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!hopes || hopes.length === 0) {
        setHopes(aaa);
      }
    }, 1000); // 1000 milliseconds (1 second)

    return () => {
      // Cleanup the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, [hopes, setHopes]);
  return <></>;
};

export default IntialSetFavorite;
