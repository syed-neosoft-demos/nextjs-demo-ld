"use client";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { childType } from "../types/types";

const ProtectedRoute = ({ children }: childType) => {
  useLayoutEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) redirect("/");
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
