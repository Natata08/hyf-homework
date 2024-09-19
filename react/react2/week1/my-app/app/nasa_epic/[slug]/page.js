"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function EpicImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  useEffect(() => {
    const fetchEpicImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=xdX4gDrrI0BLcbfiQxJJqMrF7nufAkFBeCTemGSe`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch EPIC image data");
        }

        const data = await response.json();

        if (data.length > 0) {
          const image = data[0];
          const formattedDate = date.split("-").join("/");
          const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${image.image}.png`;
          setImageUrl(imageUrl);
        } else {
          setError("No image available for the specified date");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicImage();
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        NASA EPIC Image for {date}
      </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {imageUrl && (
        <>
          <div style={{ position: "relative", width: "100%", height: "30rem" }}>
            <Image
              style={{ objectFit: "contain" }}
              fill
              priority
              src={imageUrl}
              alt={`EPIC image for ${date}`}
              className='max-w-full h-auto'
            />
          </div>
          <Link href='/nasa_epic'>
            <button style={{ textTransform: "uppercase" }}>
              Choose another date
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
