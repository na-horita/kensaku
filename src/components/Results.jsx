import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import RiseLoader from "react-spinners/RiseLoader";

const Results = (props) => {

  const isFavorite = (singleData) => {
    return props.hopes && props.hopes.findIndex((hope) => hope.id === singleData.id) !== -1;
  };

  return (
    <>
      {props.loading && <RiseLoader color={"#26d146"} size={25} margin={40} />}

      {!props.loading && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {props.photos.map((singleData, index) => (
              <div key={index}>
              <a
                href={singleData.link}
                target="_blank"
                key={index}
                rel="noreferrer"
              >
                <img src={singleData.url} alt={singleData.photographer} />
              </a>
                <p>
                  {index}:{singleData.source}:{singleData.created_at}
                  <button onClick={(event) => props.handleAddToFavorites(event, singleData)}>
                    {isFavorite(singleData) ? '解除' : 'お気に入り'}
                  </button>
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
