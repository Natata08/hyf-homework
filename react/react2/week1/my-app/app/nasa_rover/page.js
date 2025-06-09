"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const API_KEY = "xdX4gDrrI0BLcbfiQxJJqMrF7nufAkFBeCTemGSe";
const marsRoverURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`;

export default function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(marsRoverURL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setPhotos(result.photos.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <p className={styles.loading}>Loading rover photos...</p>;
    }

    if (error) {
      return (
        <p className={styles.error}>
          An error occurred while fetching the data: {error}
        </p>
      );
    }

    if (photos?.length) {
      return (
        <ul className={styles.photoGrid}>
          {photos.map((photo) => (
            <li key={photo.id} className={styles.photoItem}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src={photo.img_src}
                  alt={`Mars Rover - ${photo.camera.full_name}`}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  priority
                />
              </div>
              <p className={styles.caption}>
                {`Taken by ${photo.rover.name} on ${photo.earth_date}`}
              </p>
            </li>
          ))}
        </ul>
      );
    }

    return <p>No rover photos available</p>;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mars Rover Photos</h1>
      {renderContent()}
    </div>
  );
}
