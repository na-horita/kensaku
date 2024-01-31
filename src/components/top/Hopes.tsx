import HopesCardHook from "../../organisms/top/HopesCardHook";
import { useIndexedDB } from "../../lib/idbkeyval/useIndexedDB";

const Hopes = () => {
  const [hopes,] = useIndexedDB();
  return (
    <>
      {hopes && hopes.length > 0 && (
        <div className="splide_wrap">
          <h4 style={{ padding: "20px 0" }}>お気に入り画像集</h4>
          <HopesCardHook hopes={hopes} />
        </div>
      )}
    </>
  );
};

export default Hopes;
