import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white">
            <h1 className="text-6xl font-bold mb-4">Oops!!</h1>
            <h2 className="text-3xl font-medium mb-6">Something went wrong!</h2>
            {err && (
                <h3 className="text-xl bg-red-800 bg-opacity-80 px-4 py-2 rounded-lg shadow-md">
                    <span className="font-semibold">Error {err.status}:</span> {err.statusText}
                </h3>
            )}
            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-red-100 transition-colors duration-300"
            >
                Return to Home Page
            </Link>
        </div>
    );
};

export default Error;
