import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router";

const Root = () => {
  const { user, loading } = useContext(UserContext) as {
    user: { role: string } | null;
    loading: boolean;
  };

  if (loading) return <Outlet />;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return user.role === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/user/dashboard" />
  );
};

export default Root;
