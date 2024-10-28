// src/app/componentes/listaPeliculas/ListaPeliculas.tsx
import React from 'react';
import styles from './listaPeliculas.module.css';
import Pelicula from '../pelicula/pelicula' 

const ListaPeliculas: React.FC = () => {
  const peliculas = [
    { id: 1, titulo: 'Kung Fu Panda 1' },
    { id: 2, titulo: 'Kung Fu Panda 2' },
    { id: 3, titulo: 'Kung Fu Panda 3' },
    // Agrega más películas según sea necesario
  ];

  return (
    <div className={styles.listaPeliculasContainer}>
      <h2>Popular</h2>
      <ul>
        {/* {peliculas.map((pelicula) => (
          <li key={pelicula.id}>{pelicula.titulo}</li>
        ))} */}
        <div>
      <Pelicula 
        title="Shrek 5"
        releaseDate="August 1, 2024"
        rating={75}
        favorite={true}
      />
    </div>
      </ul>
    </div>
  );
};

export default ListaPeliculas;
