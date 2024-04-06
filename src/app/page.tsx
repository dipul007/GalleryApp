"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Compononent/Card";

export default function Home() {
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string | number>("");

  useEffect(() => {
    var id = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=NmGGfvFX3fGEzYv-akph7uZCxA04p3_VzgxkyU-VL38`
        );
        setLoading(false);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    }, 1500);
    return () => clearTimeout(id);
  }, [searchQuery]);
  return (
    <div className="main">
      <h1 className="heading">Gallery Web App</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Keywords"
        className="input"
      />
      <h2 className="result"> Total Results : {images?.results?.length}</h2>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="gallery">
          {images?.results?.map((image: any) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
