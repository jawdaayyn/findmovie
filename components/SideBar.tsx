import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../pages/movies/index";
const SideBar = ({
  list,
  list2,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <aside className="w-64 " aria-label="Sidebar">
      <div className="flex scrollbar-hide h-screen overflow-y-auto py-4 px-3 bg-gray-50 rounded-none dark:bg-gray-800">
        <ul className="space-y-2">
          {list?.Search.map((movie: any) => (
            <li key={movie.imdbID}>
              <Link
                href={`/movies/${movie.imdbID}`}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">{movie.Title}</span>
              </Link>
            </li>
          ))}
          {list2?.Search.map((movie: any) => (
            <li key={movie.imdbID}>
              <Link
                href={`/movies/${movie.imdbID}`}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">{movie.Title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
