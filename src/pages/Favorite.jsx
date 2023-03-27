import { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import PhotoAlbum from "react-photo-album";
import photos from "../components/FavoriteDatas";

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

  const unsplashPhotos = [
    {
      id: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 680,
      height: 780,
    },
    {
      id: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 840,
      height: 1620,
    },
    {
      id: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 1250,
      height: 720,
    },
    {
      id: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 480,
      height: 721,
    },
    {
      id: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 1080,
      height: 1620,
    },
    {
      id: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 1080,
      height: 607,
    },
    {
      id: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 1080,
      height: 608,
    },
    {
      id: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 1080,
      height: 720,
    },
    {
      id: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 1080,
      height: 1549,
    },
    {
      id: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 1080,
      height: 720,
    },
    {
      id: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 1080,
      height: 694,
    },
    {
      id: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
      width: 1080,
      height: 1620,
    },
    {
      id: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 1080,
      height: 720,
    },
    {
      id: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 1080,
      height: 1440,
    },
    {
      id: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 1080,
      height: 1620,
    },
    {
      id: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 1080,
      height: 810,
    },
    {
      id: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 1080,
      height: 610,
    },
  ];

  const FavoriteDatas = unsplashPhotos.map((photo) => ({
    src: photo.id,
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.id,
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <div>
      <h1>My Favorite Images</h1>
      <PhotoAlbum photos={photos} layout="rows" />
    </div>
  );
}

export default Favorite;
