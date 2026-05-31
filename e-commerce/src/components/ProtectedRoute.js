"use client";

import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const route = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!user && !loading) {
      route.push("/login");
    }
  }, [user, loading, route]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-lg font-semibold">Loading...</h1>
      </div>
    );
  }
  return { children };
};

export default ProtectedRoute;
