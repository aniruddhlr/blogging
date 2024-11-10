import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import AuthPage from '../pages/AuthPage';
import ProtectedRoute from '../components/ProtectedRoute';
import ProfilePage from '../pages/ProfilePage';
import { AuthProvider } from '../context/AuthContext';

function AppRouter() {
    return (
        // <AuthProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<AuthPage isSignUp={false} />} />
            <Route path="/signup" element={<AuthPage isSignUp={true} />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
                path="/profile"
                element={<ProtectedRoute element={<ProfilePage />} />}
            />
        </Routes>
        // </AuthProvider>
        // </Router>
    );
}

export default AppRouter;
