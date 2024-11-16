const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 animate-pulse">
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-200 h-64 rounded-lg shadow-md relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
