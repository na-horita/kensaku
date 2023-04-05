import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useRecoilValue } from "recoil";
import cartsLength from "../recoil/selectors/cartsLength";

import { Gallery } from "react-grid-gallery";

const Sus = () => {
  const length = useRecoilValue(cartsLength);

  const [corpses, setCorpses] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get('https://kensaku-express.vercel.app/api/size');
      const updatedCorpses = response.data.corpses.map((corpse) => {
        return { ...corpse, src: corpse.imgUrl };
      });
      setCorpses(updatedCorpses);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []);

  return (
    <div>
      <h3>楽天お気に入り【{length}個】</h3>
      <div>
        <Gallery images={corpses} />
      </div>
    </div>
  );
};

export default Sus;
