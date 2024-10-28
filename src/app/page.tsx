"use client";
import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './page.module.css';
import ListaPeliculas from './componentes/listaPeliculas/listaPeliculas';
import Menu from './componentes/menu/menu';

const Home: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <main>
      <div className="hero">
        <div className="overlay">
          <h1 className="title">Kung Fu Panda 4</h1>
          <div className="texto">
            <div className="textIzq">
              <p className="description">
                Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨
              </p>
            </div>
            <div className="textDer">
              {liked ? (
                <AiFillHeart className="icon" onClick={handleLike} />
              ) : (
                <AiOutlineHeart className="icon" onClick={handleLike} />
              )}
              <div className="progress-circle">
                <span className="percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="layoutContainer">
        <Menu /> {/* Menú a la izquierda */}
        <section className="movieListContainer"> 
          <ListaPeliculas /> {/* Lista de películas a la derecha */}
        </section>
      </div>
    </main>
  );
};

export default Home;

