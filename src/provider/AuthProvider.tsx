import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onUserStateChange } from "../api/firebase";
import { AuthContext } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onUserStateChange((fbUser: User | null) => {
      console.log(fbUser);
      setUser(fbUser);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
