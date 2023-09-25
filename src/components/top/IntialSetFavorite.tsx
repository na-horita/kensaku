import { useEffect } from "react";
import { useIndexedDB } from "../../features/useIndexedDB";

const aaa = [
  {
    id: 92657,
    width: 5760,
    height: 3840,
    created_at: "2019-04-07T09:46:11Z",
    source: "Pexels",
    url: "https://images.pexels.com/photos/92657/pexels-photo-92657.jpeg?auto=compress&cs=tinysrgb&h=350",
    link: "https://www.pexels.com/photo/bird-s-eye-view-landscape-village-sunshine-92657/",
    photographer: "Markus Spiske",
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
  }, [hopes]);
  return <></>;
};

export default IntialSetFavorite;
