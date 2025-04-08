import { useState, createContext, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATH } from "../utils/apiPath";
import { ReactNode } from "react";

interface UserContextType {
  user: { token: string } | null;
  loading: boolean;
  updateUser: (userData: { token: string }) => void;
  clearUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  updateUser: () => {},
  clearUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  interface User {
    token: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) return;

    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_PATH.AUTH.GET_PROFILE);
        setUser(response.data);
      } catch {
        console.error("User not authenticated");
        clearUser();
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const updateUser = (userData: { token: string }) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
