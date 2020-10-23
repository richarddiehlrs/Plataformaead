import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface User {
  userid: string;
  fullname: string;
  username: string;
  levelid: string;
  roomid: string;
  schoolid: string;
}

interface School {
  schoolid: string;
  name: string;
  city: string;
}

interface AuthContextData {
  user: User;
  senha?: string;
  signIn(loginInfo: Login): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface Login {
  username: string;
  password: string;
}

interface UserLoginData {
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserLoginData>(() => {
    const token = localStorage.getItem('@NextLevel:token');
    const user = localStorage.getItem('@NextLevel:user');

    if (user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as UserLoginData;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post(
      `${process.env.REACT_APP_PROD_API}/login`,
      {
        username,
        password,
      },
    );

    const { user, school } = response.data;

    Object.assign(user, school);

    if (user !== undefined) {
      localStorage.setItem('@NextLevel:user', JSON.stringify(user));
    }

    setData({
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NextLevel:token');
    localStorage.removeItem('@NextLevel:user');

    setData({} as UserLoginData);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@NextLevel:user', JSON.stringify(user));

      setData({
        user,
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut, updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
