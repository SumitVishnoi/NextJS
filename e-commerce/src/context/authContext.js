"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const route = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hydratedUser = async () => {
    try {
      const res = await api.get("/api/auth/me");
      console.log(res.data)
      setUser(res.data.user);
      route.push("/layout/home");
    } catch (error) {
        setUser(null)
      console.log("error in hydrated user", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    hydratedUser()
  }, [])
  return (
    <Auth.Provider value={{ user, hydratedUser, loading }}>
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);
