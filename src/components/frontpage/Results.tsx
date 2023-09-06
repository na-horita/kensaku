import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import RiseLoader from "react-spinners/RiseLoader";
import { Button } from "react-bootstrap";

const Results = (props: any) => {
  // お気に入りor解除のボタンtoggle
  const isFavorite = (singleData: any) => {
    return (
      props.hopes &&
      props.hopes.findIndex((hope: any) => hope.id === singleData.id) !== -1
    );
  };

  // 押下でindexedDBに登録or解除
  const handleAddToFavorites = (event: any, image: any) => {
    event.preventDefault();

    // 「お気に入り」の配列の中と一致するかのフラグ -1は不一致を表す。
    let existingIndex = -1;

    // 「お気に入り」一覧を格納するための配列
    let newHopes: any;

    // 「お気に入り」一覧に既に値があるのかの条件分岐 あれば「お気に入り」とこのイメージが一致するかを計算
    if (props.hopes && props.hopes.length) {
      existingIndex = props.hopes.findIndex((hope: any) => hope.id === image.id);
      newHopes = [...props.hopes];
    } else {
      // 「お気に入り」一覧が空の配列ならば、newHopesに空の配列を設定
      newHopes = [];
    }

    if (existingIndex !== -1) {
      newHopes.splice(existingIndex, 1);
    } else {
      newHopes.push(image);
    }
    props.setHopes(newHopes);
  };

  return (
    <>
      {props.loading && <RiseLoader color={"#26d146"} size={25} margin={40} />}

      {!props.loading && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5, 1080: 6 }}>
          <Masonry columnsCount={3} gutter="10px">
            {props.photos.map((singleData: any, index: any) => (
              <div key={index}>
                <a href={singleData.link} target="_blank" key={index} rel="noreferrer">
                  <img src={singleData.url} alt={singleData.photographer} />
                </a>
                <p>
                  {index}:{singleData.source}:{singleData.created_at}
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="mt-1"
                    onClick={(event) => handleAddToFavorites(event, singleData)}
                  >
                    {isFavorite(singleData) ? "解除" : "お気に入り"}
                  </Button>
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};

export default Results;
