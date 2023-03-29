import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import styles from "../pages/MovieDetails.module.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img src={imageUrl} alt={movie.title} className={`${styles.col} ${styles.movieImage}`} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.title}>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Release date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Vote average: </strong>
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
}