import { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import PhotoAlbum from "react-photo-album";

function Favorite() {
  const [hopes, setHopes] = useState([]);

  useEffect(() => {
    get("hopes").then((result) => {
      if (result !== undefined) {
        setHopes(result);
      }
    });
  }, [hopes]);

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
          <a href={`${photo.link}`} target="_blank">
                <div
                    style={{
                        position: "absolute",
                        overflow: "hidden",
                        backgroundColor: "rgba(255 255 255 / .6)",
                        inset: "auto 0 0 0",
                        padding: 1,
                    }}
                >
                    {photo.source}
            </div>
          </a>
            )}
        </div>
    )}
/>
    </div>
  );
}

export default Favorite;
