import React, {
  createContext, useCallback, useState, useContext, useMemo,
} from 'react';

import UserInterface from 'models/User';
import SchoolInterface from 'models/School';
import api from 'services/api';

interface AuthContextData {
  user: UserInterface;
  senha?: string;
  signIn(loginInfo: Login): Promise<void>;
  signOut(): void;
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

// interface MovieTypeView {
//   [x: string]: string;
// }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  // const [moviesTypeView, setMoviesTypeView] = useState<MovieTypeView[]>(() => {
  //   const movieView = localStorage.getItem('@NextLevel:movieView');

  //   if (movieView) {
  //     const type = JSON.parse(movieView);
  //     return type;
  //   }

  //   return [{}];
  // });

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
      `${process.env.REACT_APP_API_URL}/login`,
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
    // localStorage.removeItem('@NextLevel:movieView');

    setData({} as UserLoginData);
  }, []);

  // const updateMoviesView = useCallback((categoryTitle: string) => {
  //   let categoryTypeView: {} | undefined;
  //   let movieTypeViewIndex;
  //   let newMoviesTypeView: MovieTypeView[];

  //   if (moviesTypeView.length > 1) {
  //     let newItem;
  //     let viewType;

  //     categoryTypeView = moviesTypeView.find((movieTypeView) => Object.keys(movieTypeView)[0] === categoryTitle && movieTypeView);
  //     movieTypeViewIndex = moviesTypeView.findIndex((movieTypeView) => Object.keys(movieTypeView)[0] === categoryTitle && movieTypeView);
  //     newMoviesTypeView = moviesTypeView;

  //     if (categoryTypeView) {
  //       viewType = Object.values(newMoviesTypeView[movieTypeViewIndex])[0] === 'thin' ? 'large' : 'thin';
  //       newItem = newMoviesTypeView[movieTypeViewIndex];
  //       newItem = { [categoryTitle]: viewType };
  //       newMoviesTypeView.splice(movieTypeViewIndex, 1, newItem);

  //       setMoviesTypeView(newMoviesTypeView);
  //     } else {
  //       newItem = { [categoryTitle]: 'large' };
  //       newMoviesTypeView.push(newItem);

  //       setMoviesTypeView(newMoviesTypeView);
  //     }
  //   } else {
  //     categoryTypeView = { [categoryTitle]: 'large' };
  //     newMoviesTypeView = moviesTypeView;
  //     newMoviesTypeView.push(categoryTypeView);

  //     setMoviesTypeView(newMoviesTypeView);
  //   }

  //   localStorage.setItem('@NextLevel:movieView', JSON.stringify(newMoviesTypeView));
  // }, [moviesTypeView]);

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
