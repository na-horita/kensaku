import React, { Suspense } from 'react';
import axios from 'axios';

const Images = React.lazy(() => import('../components/Images'));

const Sus = () => {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('https://api.pexels.com/v1/search?query=runner&per_page=80', {
        headers: {
          Authorization: 'ycuX09ywi56e2xu3hSuMWNDw4vzJAyye7HKi7LYQIoEUz0QnoQC0sE7S',
        },
      });

      setImages(response.data.photos);
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Images of the Moon</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <div>Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...</div>
        ) : (
          <Images images={images} />
        )}
      </Suspense>
    </div>
  );
};

export default Sus;
