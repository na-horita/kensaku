import { useState, useEffect } from "react";
import { get } from "idb-keyval";
import PhotoAlbum from "react-photo-album";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Favorite() {
  const [hopes, setHopes] = useState([]);

  useEffect(() => {
    get("hopes").then((result) => {
      if (result !== undefined) {
        setHopes(result);
      }
    });
  }, []);

  const breakpoints = [880, 640, 384, 256, 128, 96, 64, 48];

  const FavoriteDatas = hopes.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
    source: photo.source,
    link: photo.link,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.url,
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <div>
      <h1>My Favorite Images</h1>
      <PhotoAlbum
        layout="rows"
        spacing="8"
        photos={FavoriteDatas}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ position: "relative", ...wrapperStyle }}>
            {renderDefaultPhoto({ wrapped: true })}
            {photo.src && (
              <div
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  inset: "0 0 0 0",
                }}
              >
                <a href={`${photo.link}`} target="_blank" rel="noreferrer">
                  <p
                    style={{
                      position: "absolute",
                      inset: "auto 0 0 auto",
                      zIndex: "10",
                      display: "table",
                      overflow: "hidden",
                      backgroundColor: "rgba(255 255 255 / .7)",
                      padding: "3px 6px",
                      marginBottom: "0rem",
                    }}
                  >
                    {" "}
                    {photo.source}
                  </p>
                </a>
                <Zoom>
                  <img alt={photo.source} src={photo.src} />
                </Zoom>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default Favorite;