import SideBar from "../../components/SideBar";
import Nav from "../../components/Nav";
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
        <p>Just click on a movie on the sidebar to display its informations.</p>
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
