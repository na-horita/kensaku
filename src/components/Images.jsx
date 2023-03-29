import React from 'react';

const Images = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src.large} alt={image.photographer} />
      ))}
    </div>
  );
};

export default Images;