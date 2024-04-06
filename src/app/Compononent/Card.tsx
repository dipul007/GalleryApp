"use client";
import React from "react";
import Image from "next/image";

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    username: string;
    bio: string;
    profile_image: {
      small: string;
    };
  };
  likes: number;
}

interface CardProps {
  image: Image;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="card">
      <Image
        src={image.urls.regular}
        alt={image.alt_description}
        width={500}
        height={500}
        objectFit="cover"
      />
      <div className="overlay">
        <div className="details">
          <h2>{image.user.username}</h2>
          <p>{image.user.bio}</p>
          <Image
            src={image.user.profile_image.small}
            alt={image.user.username}
            width={40}
            height={40}
          />
        </div>
        <div className="like-count">{image.likes} Likes</div>
      </div>
    </div>
  );
};

export default Card;
