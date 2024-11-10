import { useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();
    return (
        <div className="container mx-auto p-8">
            <div className="flex items-center mb-4 space-x-4">
                <img
                    className="w-16 h-16 rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="User avatar"
                />
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
                    <p className="text-gray-600">Bio: A brief description of the user...</p>
                </div>
            </div>
            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800">User’s Posts</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Example of a user post */}
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">User Post Title</h2>
                    <p className="text-gray-600">A brief description of the post...</p>
                    <button className="mt-4 text-blue-500 hover:underline">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
