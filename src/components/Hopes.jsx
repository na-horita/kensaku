import HopesCard from "./HopesCard";

const Hopes = (props) => {
  return (
    <>
      {props.hopes && props.hopes.length > 0 && (
        <div className="splide_wrap">
          <h4 style={{ padding: "20px 0" }}>お気に入り画像集</h4>
          <HopesCard hopes={props.hopes} />
        </div>
      )}
    </>
  );
};

export default Hopes;
