import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import { InferGetServerSidePropsType } from "next";

function Home({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(movie);
  return (
    <div className="flex-col">
      <Nav />
      <div className="flex">
        <SideBar />

        <ul>
          <img src={movie.Poster} />

          <li>Actors: {movie.Actors}</li>
          <li>Awards: {movie.Awards}</li>
          <li>BoxOffice : {movie.BoxOffice}</li>
          <li>Country : {movie.Country}</li>
          <li>DVD : {movie.DVD}</li>
          <li>Director : {movie.Director}</li>
          <li>Genre : {movie.Genre}</li>
          <li>Language : {movie.Language}</li>
          <li>Metascore : {movie.Metascore}</li>
          <li>Plot : {movie.Plot}</li>
          <li>Production : {movie.Production}</li>
          <li>Released : {movie.Released}</li>
          <li>Runtime : {movie.Runtime}</li>
          <li>Title : {movie.Title}</li>
          <li>Writer : {movie.Writer}</li>
          <li>Year : {movie.Year}</li>
          <li>imdbRating : {movie.imdbRating}</li>
          <li>imdbVotes : {movie.imdbVotes}</li>
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const key = process.env["KEY"];
  const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${key}`);
  const movie: any = await res.json();

  // Pass data to the page via props
  return {
    props: {
      movie,
    },
  };
}
export default Home;
