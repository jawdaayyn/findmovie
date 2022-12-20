import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="w-64 " aria-label="Sidebar">
      <div className="flex h-screen overflow-y-auto py-4 px-3 bg-gray-50 rounded-none dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
