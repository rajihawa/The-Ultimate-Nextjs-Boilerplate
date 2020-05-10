import React, { createContext, useState } from "react";
import { signout } from "../lib/requests";

interface AuthProps {
  user: UserProps;
  setUser: (data: UserProps) => void;
  signout: () => void;
}

interface UserProps {
  name: string;
}

interface ComponentProps {
  children: JSX.Element | JSX.Element[] | null | undefined;
}

export const AuthControl = createContext<AuthProps>(null);

const AuthContext: React.FC<ComponentProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProps>(null);

  const LoginUser = (data: UserProps) => {
    setCurrentUser(data);
  };

  const SignoutUser = () => {
    signout().then(() => {
      location.reload();
    });
  };

  return (
    <AuthControl.Provider
      value={{
        user: currentUser,
        setUser: LoginUser,
        signout: SignoutUser,
      }}
    >
      {children}
    </AuthControl.Provider>
  );
};

export default AuthContext;
