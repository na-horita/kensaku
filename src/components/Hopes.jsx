import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Hopes = (props) => {
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
    perPage,
    perMove,
    gap,
    type: "loop",
    pagination: false,
    arrows: true,
    rewind: true,
    classes: {
      arrow: "splide__arrow custom-arrow",
    },
  };

  return (
    <>
      {props.hopes && props.hopes.length > 0 && (
        <div className="splide_wrap">
          <h4 style={{ padding: "20px 0" }}>お気に入り画像集</h4>
          <Splide options={options}>
            {props.hopes.map((hope, index) => (
              <SplideSlide key={hope.id}>
                <a href={hope.link} target="_blank" rel="noreferrer">
                  <img src={hope.url} alt={hope.photographer} />
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </>
  );
};

export default Hopes;
