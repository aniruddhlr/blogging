// pages/ProfilePage.jsx
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
            <h2 className="text-2xl mb-4">Your Profile</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            <button
                onClick={logout}
                className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md"
            >
                Logout
            </button>
        </div>
    );
};

export default ProfilePage;
