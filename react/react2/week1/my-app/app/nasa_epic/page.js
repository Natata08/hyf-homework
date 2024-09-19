"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function EpicHomePage() {
  const dateRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = dateRef.current.value;
    if (date) {
      router.push(`/nasa_epic/epic-image?date=${date}`);
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        NASA EPIC Image
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Select a date:</label>
        <br />
        <input
          type='date'
          id='date'
          ref={dateRef}
          required
          style={{ marginRight: "1rem", marginTop: "1rem" }}
        />
        <button type='submit' style={{ textTransform: "uppercase" }}>
          Show Image
        </button>
      </form>
    </div>
  );
}
