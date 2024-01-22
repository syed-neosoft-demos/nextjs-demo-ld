"use client";
import { childType, userContextSchema } from "@/src/types/types";
import { createContext, useState } from "react";

const userInitialState = {
  user: {
    id: 0,
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    token: "",
    image: "",
  },
  setUser: (el: userContextSchema) => {},
};
export const UserContext = createContext(userInitialState);

const UserContextProvider = ({ children }: childType) => {
  const [user, setUser] = useState<userContextSchema>(userInitialState.user);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
