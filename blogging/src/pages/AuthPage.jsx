import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AuthPage = ({ isSignUp = false }) => {
    const [username, setUsername] = useState("");  // For signup only
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login, user } = useAuth();  // Get the login function and user state from context

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isSignUp
            ? "http://127.0.0.1:8000/users/signup"
            : "http://127.0.0.1:8000/users/login";

        try {
            const data = isSignUp ? { username, email, password } : { email, password };
            const response = await axios.post(url, data);
            if (response.data.token) {
                // Store token in localStorage
                localStorage.setItem("authToken", response.data.token);

                // Call the login function from context to set user state
                login(response.data.token, response.data.user);

                // Redirect to home page after successful signup/login
                navigate("/");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Username"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {isSignUp ? "Create Account" : "Sign In"}
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                        <Link
                            to={isSignUp ? "/login" : "/signup"}
                            className="text-blue-500 hover:underline"
                        >
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
