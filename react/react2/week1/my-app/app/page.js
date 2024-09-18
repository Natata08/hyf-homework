import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Homework for React2-week1</h1>
      <p>
        <Link href='/nasa_daily' className={styles.link}>
          Task 1. Server Side Rendering.
          <br />
          Astronomy Picture of the Day
        </Link>
      </p>
      <p>
        <Link href='/nasa_rover' className={styles.link}>
          Task 2. Client-side data fetching.
          <br />
          Mars Rover Photos
        </Link>
      </p>
      <p>
        <Link href='/blog' className={styles.link}>
          Task 3a. Routing and Navigation.
          <br />A Blog Website
        </Link>
      </p>
      <p>
        <Link href='/nasa_epic' className={styles.link}>
          Task 3b. Routing and Navigation. <br />
          NASA EPIC image
        </Link>
      </p>
    </div>
  );
}
