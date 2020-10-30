import React, {
  createContext, useCallback, useState, useContext, useMemo,
} from 'react';

import UserInterface from 'models/User';
import SchoolInterface from 'models/School';
import api from 'services/api';

interface AuthContextData {
  user: UserInterface;
  senha?: string;
  movieTypeView: string;
  signIn(loginInfo: Login): Promise<void>;
  signOut(): void;
  updateMovieView(): void;
  updateUser(user: UserInterface): void;
}

interface Login {
  username: string;
  password: string;
}

interface UserLoginData {
  user: UserInterface;
}

interface LoginRequestData {
  user: UserInterface;
  school: SchoolInterface;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [movieTypeView, setMovieTypeView] = useState<string>(() => {
    const movieView = localStorage.getItem('@NextLevel:movieView');

    if (movieView) {
      const type = movieView;
      return type;
    }

    return 'thin';
  });

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

  const defaultUserProfileImage = useMemo<string>(() => 'https://nextlevelimagesprofile.s3-sa-east-1.amazonaws.com/defaultUser.png', []);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post<LoginRequestData>(
      `${process.env.REACT_APP_PROD_API}/login`,
      {
        username,
        password,
      },
    );

    const { user, school } = response.data;

    user.imageurl = user.imageurl !== ' ' || '' ? user.imageurl : defaultUserProfileImage;

    Object.assign(user, { schoolCity: school.city, schoolName: school.name });

    if (user !== undefined) {
      localStorage.setItem('@NextLevel:user', JSON.stringify(user));
    }

    setData({
      user,
    });
  }, [defaultUserProfileImage]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NextLevel:token');
    localStorage.removeItem('@NextLevel:user');
    localStorage.removeItem('@NextLevel:movieView');

    setData({} as UserLoginData);
  }, []);

  const updateMovieView = useCallback(() => {
    const type = movieTypeView === 'thin' ? 'large' : 'thin';

    setMovieTypeView(type);

    localStorage.setItem('@NextLevel:movieView', type);
  }, [movieTypeView]);

  const updateUser = useCallback(
    (user: UserInterface) => {
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
        user: data.user, signIn, signOut, updateUser, updateMovieView, movieTypeView,
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
