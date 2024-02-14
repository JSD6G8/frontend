import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/authProvider';

export const ProtectedRoute = () => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to="/" />;
};

