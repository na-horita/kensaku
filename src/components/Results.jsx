import { useState,useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import RiseLoader from "react-spinners/RiseLoader";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Results = (props) => {

  const isFavorite = (singleData) => {
    return props.hopes && props.hopes.findIndex((hope) => hope.id === singleData.id) !== -1;
  };

  const [perPage, setPerPage] = useState(10);
  const [perMove, setPerMove] = useState(10);
  const [gap, setGap] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPerPage(10);
        setPerMove(10);
        setGap(12);
      } else if (window.innerWidth >= 768) {
        setPerPage(8);
        setPerMove(8);
        setGap(10);
      } else {
        setPerPage(5);
        setPerMove(5);
        setGap(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    perPage: perPage,
    perMove: perMove,
    gap: gap,
    type: "loop",
    pagination: false,
    arrows: true,
    rewind: true,
    classes: {
      arrow: 'splide__arrow custom-arrow',
    },
  };

  return (
    <>
      {props.loading && <RiseLoader color={"#26d146"} size={25} margin={40} />}

      {!props.loading && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {props.photos.map((singleData, index) => (
              <a
                href={singleData.link}
                target="_blank"
                key={index}
                rel="noreferrer"
              >
                <img src={singleData.url} alt={singleData.photographer} />
                <p>
                  {index}:{singleData.source}:{singleData.created_at}
                  <button onClick={(event) => props.handleAddToFavorites(event, singleData)}>
                    {isFavorite(singleData) ? '解除' : 'お気に入り'}
                  </button>
                </p>
              </a>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      <hr />
      {props.hopes && props.hopes.length > 0 && (
          <div className="splide_wrap">
            <h4 style={{padding:"20px 0"}}>お気に入り画像集</h4>
            <Splide options={options}>
            {props.hopes.map((hope) => (
              <SplideSlide key={hope.id}>
                <img src={hope.url} alt={hope.photographer} />
              </SplideSlide>
            ))}
            </Splide>
          </div>
        )}
    </>
  );
};

export default Results;
