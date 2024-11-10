import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <div>
                <Link to="/" className="text-lg font-semibold">Home</Link>
            </div>
            <div>
                {user ? (
                    <>
                        <span className="mr-4">Welcome, {user.username}</span>
                        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4">Sign In</Link>
                        <Link to="/signup" className="mr-4">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
