const Home = () => (
    <div className="container mx-auto p-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Welcome to Medium Clone</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Post previews will be added here */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">Sample Post Title</h2>
                <p className="text-gray-600">A brief description of the post...</p>
                <button className="mt-4 text-blue-500 hover:underline">Read more</button>
            </div>
        </div>
    </div>
);

export default Home;
