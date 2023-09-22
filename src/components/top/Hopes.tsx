import HopesCardHook from "../../organisms/top/HopesCardHook";
import { Photo } from "../../ts/photo";

const Hopes = ({ hopes }: { hopes: Photo[] | null }) => {
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
