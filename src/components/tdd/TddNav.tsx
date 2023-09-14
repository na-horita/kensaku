import React from 'react';
import { Link } from "react-router-dom";

const TddNav = () => {
  return (
    <div className="my-8">
      <h2 className="mb-8">テスト開発</h2>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2 no-underline"
        to="/tdd/pexels"
      >
        ピクセルデータ
      </Link>
      <Link
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mx-2 no-underline"
        to="/tdd/unsplash"
      >
        アンスプラッシュデータ
      </Link>
    </div>
  );
}

export default TddNav
