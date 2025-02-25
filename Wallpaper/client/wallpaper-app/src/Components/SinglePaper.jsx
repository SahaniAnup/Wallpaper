import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function WallpaperDetails() {
  const { id } = useParams();
  const [wallpapers, setWallpaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/wallpaper/${id}`)
      .then(response => response.json())
      .then(data => {
        setWallpaper(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching wallpaper:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wallpapers) {
    return <div>Wallpaper not found</div>;
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="wallpaper-cover">
            <img src={wallpapers.img} alt={wallpapers.title} className="wallpaper-img" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="wallpaper-details">
            <h5 className="wallpaper-title">{wallpapers.title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
