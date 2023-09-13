import { useState, useEffect } from "react";

import axios from "axios";

import SearchForm from "../components/frontpage/SearchForm";
import Results from "../components/frontpage/Results";
import FrequentData from "../features/frequent/FrequentData";
import Hopes from "../components/frontpage/Hopes";
import Explain from "../components/frontpage/Explain";

import { useIndexedDB } from "../useIndexedDB";

import { fetchData, sortByNewestCreationDate } from "../features/gathering";
import { Photo, GetPexelsData, PexelsApiSchema, UnsplashApiSchema } from "../ts/photo";

const Top = () => {
  const [hopes, setHopes] = useIndexedDB("hopes");
  const [word, setWord] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  useEffect(() => {
    keyword &&
      (async () => {
        setLoading(true);
        setWord(keyword);
        await searchImages(keyword);
        setLoading(false);
      })();
  }, [keyword]);

  // 初期値をuseStateで保持している変数のwordにした。そしてこの変数は外部から代入することが可能としている。
  const searchImages = async (word2 = word) => {
    const inputData: PexelsApiSchema & UnsplashApiSchema = {
      word: word2,
      num: 20,
    };

    // pexels APIのリクエスト 最大８０件まで
    const pexelsPhotos = await fetchData("Pexels", { ...inputData, num: 25 });
    // Unsplash APIのリクエスト 最大３０件まで
    const unsplashPhotos = await fetchData("Unsplash", inputData);

    // PexelsとUnsplashの結果を合わせる。両方共に空ならばnullとする
    const mergedPhotos: Photo[] | null =
      pexelsPhotos !== null && unsplashPhotos !== null
        ? [...pexelsPhotos, ...unsplashPhotos]
        : null;

    // 作成日の新しい順にソートする
    sortByNewestCreationDate(mergedPhotos as Photo[]);

    setPhotos(mergedPhotos);
  };

  const getPhotoData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await searchImages();
    setLoading(false);
  };

  return (
    <>
      <Explain />
      <div>
        <h3>良く検索される一覧</h3>
        <form>
          <FrequentData
            setWord={setWord}
            searchImages={searchImages}
            loading={loading}
            setLoading={setLoading}
          />
        </form>
      </div>
      <SearchForm setWord={setWord} word={word} getPhotoData={getPhotoData} />
      検索文字:{word}
      <Results photos={photos} loading={loading} setHopes={setHopes} hopes={hopes} />
      <hr />
      <Hopes hopes={hopes} />
    </>
  );
};

export default Top;
