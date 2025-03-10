import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
