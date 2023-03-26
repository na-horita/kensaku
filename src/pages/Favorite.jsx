
import { useState,useEffect } from "react";
import { get, set } from 'idb-keyval';
import PhotoAlbum from "react-photo-album";
import photos from "../components/FavoriteDatas";

function Favorite() {
    const [hopes, setHopes] = useState([]);

  useEffect(() => {
    get('hopes').then((result) => {
      if (result !== undefined) {
        setHopes(result);
      }
    });
  }, []);

  return (
    <div>
      <h1>My Favorite Images</h1>
        <PhotoAlbum photos={photos} layout="rows" />
    </div>
  );
}

export default Favorite;
