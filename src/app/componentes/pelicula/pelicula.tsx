// components/pelicula.tsx
import React, { useState } from 'react';
import styles from './pelicula.module.css';
import Image from 'next/image';
import imagen from '../../assets/Shrek.jpeg';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface PeliculaProps {
  title: string;
  releaseDate: string;
  rating: number;
  favorite: boolean;
}

const Pelicula: React.FC<PeliculaProps> = ({ title, releaseDate, rating, favorite }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imagen}
          alt={`${title} poster`}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.releaseDate}>{releaseDate}</p>
        
        <div className={styles.details}>
            <div>
            <h4 className={styles.titleDetails}>Raiting</h4>
            <div className="progress-circle2">
                <span className="percentage2">75%</span>
            </div>
            </div>
            {/* Contenedor para el ícono de favoritos */}
            <div className={styles.favoritesContainer}>
                <h4 className={styles.titleDetails}>Favorites</h4>
                {liked ? (
                <AiFillHeart className="icon2" onClick={handleLike} />
                ) : (
                <AiOutlineHeart className="icon2" onClick={handleLike} />
                )}
            </div>
            </div>

        </div>
      </div>
  );
};

export default Pelicula;
