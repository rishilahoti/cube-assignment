import React, { useEffect, useState } from 'react';

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchImages = () => {
    const images = Array.from({ length: 9 }, (_, i) => 
      `https://picsum.photos/200/200?random=${customerId}-${i}&t=${new Date().getTime()}`
    );
    setPhotos(images);
  };

  useEffect(() => {
    fetchImages();
    const interval = setInterval(fetchImages, 10000);

    return () => clearInterval(interval);
  }, [customerId]);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Random ${index}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
