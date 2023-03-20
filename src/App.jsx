import { useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'
import Frequent from './components/Frequent';
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [photos,setPhotos] = useState([])

  const searchImages = async () => {
    const pexelsAPIKey = 'ycuX09ywi56e2xu3hSuMWNDw4vzJAyye7HKi7LYQIoEUz0QnoQC0sE7S';
    const unsplashAPIKey = 'UrTEHHwYhYpE612HSg7bfj7KPAHUADyp1YCJsoLEcL8';

    // Pexels APIのリクエスト 最大８０件まで
    const pexelsResponse = await axios.get(`https://api.pexels.com/v1/search?query=${word}&per_page=10`, {
      headers: {
        Authorization: pexelsAPIKey,
      },
    });
    const pexelsPhotos = pexelsResponse.data.photos.map((photo) => ({
      id: photo.id,
      source: 'pexels',
      url: photo.src.medium,
      link: photo.url,
      photographer: photo.photographer,
      created_at: photo.created_at,
    }));

    // Unsplash APIのリクエスト 最大３０件まで
    const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${word}&per_page=10`, {
      headers: {
        Authorization: `Client-ID ${unsplashAPIKey}`,
      },
    });
    const unsplashPhotos = unsplashResponse.data.results.map((photo) => ({
      id: photo.id,
      source: 'unsplash',
      url: photo.urls.regular,
      link: photo.links.html,
      photographer: photo.user.name,
      created_at: photo.created_at,
    }));

    // PexelsとUnsplashの結果を合わせる
    const mergedPhotos = [...pexelsPhotos, ...unsplashPhotos];

    // 作成日の新しい順にソートする
    mergedPhotos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // 結果をセットする
    setPhotos(mergedPhotos);
  };

  const getPhotoData = (e) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <div className="App">
        <Title />
        <Frequent setWord={setWord} searchImages={searchImages}/>
        <Form setWord={setWord} getPhotoData={getPhotoData} />
        検索文字:{word}
        <Results photos = {photos} />
    </div>
  )
}

export default App
