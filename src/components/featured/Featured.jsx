import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ movieType, setGenre }) {
  const [movieContent, setMovieContent] = useState({});

  useEffect(() => {
    const getRandomMovieContent = async () => {
      try {
        const res = await axios.get(`/movies/random?movieType=${movieType}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovieContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomMovieContent();
  }, [movieType]);

  console.log(movieContent);
  return (
    <div className="featured">
      {movieType && (
        <div className="category">
          <span>{movieType === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(event) => setGenre(event.target.value)}
          >
            <option>Gênero</option>
            <option value="adventure">Aventuras</option>
            <option value="comedy">Comédia</option>
            <option value="crime">Crimes</option>
            <option value="fantasy">Fantasia</option>
            <option value="historical">Histórico</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Acão</option>
            <option value="western">Ocidental</option>
            <option value="animation">Entretenimento</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentários</option>
          </select>
        </div>
      )}
      <img src={movieContent.image} alt="" />
      <div className="info">
        <img src={movieContent.imageTitle} alt="" />
        <span className="desc">{movieContent.description}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Assistir</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info...</span>
          </button>
        </div>
      </div>
    </div>
  );
}
