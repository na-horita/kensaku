import { useState, useEffect } from "react";

import axios from "axios";

import SearchForm from "../components/frontpage/SearchForm";
import Results from "../components/frontpage/Results";
import FrequentData from "../features/frequent/FrequentData";
import Hopes from "../components/frontpage/Hopes";
import Explain from "../components/frontpage/Explain";

import { useIndexedDB } from "../useIndexedDB";

import { getPexelsData } from "../features/gathering";

const Top = () => {
  // const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const [hopes, setHopes] = useIndexedDB("hopes");
  const [word, setWord] = useState<any>("");
  const [photos, setPhotos] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

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
    const pexelsAPIKey = import.meta.env.VITE_REACT_APP_API_pexels;
    const unsplashAPIKey = import.meta.env.VITE_REACT_APP_API_unsplash;

    // Pexels APIのリクエスト 最大８０件まで
    const pexelsResponse = await getPexelsData(word2, 15, pexelsAPIKey);
    const pexelsPhotos = pexelsResponse.map((photo: any) => ({
      id: photo.id,
      source: "pexels",
      url: photo.src.medium,
      width: photo.width,
      height: photo.height,
      link: photo.url,
      photographer: photo.photographer,
      created_at: photo.created_at,
    }));

    // Unsplash APIのリクエスト 最大３０件まで
    const unsplashResponse = await axios.get(
      `https://api.unsplash.com/search/photos?query=${word2}&per_page=15`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashAPIKey}`,
        },
      }
    );
    const unsplashPhotos = unsplashResponse.data.results.map((photo: any) => ({
      id: photo.id,
      source: "unsplash",
      url: photo.urls.regular,
      width: photo.width,
      height: photo.height,
      link: photo.links.html,
      photographer: photo.user.name,
      created_at: photo.created_at,
    }));

    // PexelsとUnsplashの結果を合わせる
    const mergedPhotos: any = [...pexelsPhotos, ...unsplashPhotos];

    // 作成日の新しい順にソートする
    // sortByNewestCreationDate(mergedPhotos);

    // 結果をセットする
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
