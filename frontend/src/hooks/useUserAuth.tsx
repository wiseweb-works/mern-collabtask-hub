import { useEffect, useContext, use } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

export const useUserAuth = () => {
  const { user, loading, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return;

    if (!user) {
      clearUser();
      navigate("/login");
    }
  }, [user, loading, navigate, clearUser]);
};
