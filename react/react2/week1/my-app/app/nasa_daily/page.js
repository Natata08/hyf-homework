import Image from "next/image";
import styles from "./page.module.css";

const API_KEY = "xdX4gDrrI0BLcbfiQxJJqMrF7nufAkFBeCTemGSe";
const astronomyPicOfTheDayURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export default async function AstronomyDailyPicturePage() {
  const res = await fetch(astronomyPicOfTheDayURL);
  if (!res.ok) throw new Error("Failed to fetch astronomy picture of the day");
  const pictureData = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Astronomy Picture of the Day</h1>
      {pictureData.url ? (
        <>
          <h2 className={styles.pictureTitle}>{pictureData.title}</h2>
          <div className={styles.imageContainer}>
            <Image
              fill
              priority
              src={pictureData.url}
              alt={`Photo of ${pictureData.title}`}
              className={styles.image}
            />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.copyright}>
              Copyright: {pictureData.copyright || "Public Domain"}
            </p>
            <p className={styles.date}>Date: {pictureData.date}</p>
            <p className={styles.explanation}>{pictureData.explanation}</p>
          </div>
        </>
      ) : (
        <p>Loading astronomy picture of the day...</p>
      )}
    </div>
  );
}
