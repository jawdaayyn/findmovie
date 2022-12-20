import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import { InferGetServerSidePropsType } from "next";

function Home({
  movie,
  list,
  list2,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex-col">
      <Nav />
      <div className="flex">
        <SideBar list={list} list2={list2} movie={undefined} />

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
export default Home;
