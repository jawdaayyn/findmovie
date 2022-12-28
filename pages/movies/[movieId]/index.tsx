import SideBar from "../../../components/SideBar";
import Nav from "../../../components/Nav";
import { InferGetServerSidePropsType } from "next";
const Movie = ({
  movie,
  list,
  list2,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex">
        <SideBar list={list} list2={list2} movie={undefined} />
        <div className="flex flex-col">
          <img src={movie.Poster} width="200" height="200" />
          <span>TITRE FILM : {movie.Title}</span>
          <span>SORTI LE : {movie.Released}</span>
          <span>DUREE DU FILM : {movie.Runtime}</span>
          <span>GENRES DU FILM : {movie.Genre}</span>
          <span>DIRECTEUR DU FILM : {movie.Director}</span>
          <span>ACTEURS PRINCIPAUX DU FILM : {movie.Actors}</span>
          <p>SYNOPSIS :{movie.Plot}</p>
          <span>LANGUE : {movie.Language}</span>
          <span>PAYS : {movie.Country}</span>
          <span>AWARDS : {movie.Awards}</span>
          <span>METASCORE : {movie.Metascore}</span>
          <span>NOTE DONNEE PAR IMDB : {movie.imdbRating}</span>
          <span>NOMBRES DE VOTANTS D'IMDB : {movie.imdbVotes}</span>
          <span>TYPE "(série ou film)" : {movie.Type}</span>
          <span>BOX OFFICE : {movie.BoxOffice}</span>
          {movie.Ratings.map((rating: any) => (
            <span>
              {rating.Source} : {rating.Value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const { movieId } = context.query;
  const key = process.env["KEY"];
  const res = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${key}`);
  const movie: any = await res.json();
  const resList = await fetch(
    `https://omdbapi.com/?type=movie&page=1&apikey=${key}&s=love`
  );
  const list: any = await resList.json();
  const resList2 = await fetch(
    `https://omdbapi.com/?type=movie&page=1&apikey=${key}&s=car`
  );
  const list2: any = await resList2.json();
  // Pass data to the page via props
  return {
    props: {
      list,
      list2,
      movie,
    },
  };
}
