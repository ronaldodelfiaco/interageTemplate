import LoadingScreen from '../components/LoadingScreen';
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { ActionMap, AuthState, AuthUser } from './JWTAuthContext';
import sha1 from 'sha1';
import axios from '../utils/axios';
import { herokuConfig } from '../config';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

var user_: any;
const agora = new Date();

// auth types
// ==========================================
enum Types {
  Init = 'INIT',
}

type HerokuAuthPayload = {
  [Types.Init]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
};

type HerokuActions =
  ActionMap<HerokuAuthPayload>[keyof ActionMap<HerokuAuthPayload>];
// ==========================================

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state: AuthState, action: HerokuActions) => {
  if (action.type === 'INIT') {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      user,
      isAuthenticated,
      isInitialized: true,
    };
  }
  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: 'heroku',
  login: (email: string, password: string) => Promise.resolve(),
  logout: (user: any) => Promise.resolve(),
});

// props type
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useRouter();

  const login = (email: string, password: string) => {
    return new Promise(async function (resolve, reject) {
      const passwordCrypt = sha1(password);
      const herokuLogin =
        herokuConfig + 'login?login=' + email + '&senha=' + passwordCrypt;
      let response: any;
      try {
        response = axios.get(herokuLogin);
        user_ = response.data.body.usuarioLogado;
        dispatch({
          type: Types.Init,
          payload: {
            isAuthenticated: true,
            user: user_,
          },
        });
        localStorage.setItem('user', JSON.stringify(user_));
        localStorage.setItem('dtLogin', format(agora, 'dd-MM-yyyy HH:mm:ss'));
        resolve(user_);
      } catch (error) {
        user_ = null;
        dispatch({
          type: Types.Init,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
        reject(error);
      }
    });
  };

  const logout = async (user: any) => {
    user = localStorage.getItem('user');

    const herokuLogin = herokuConfig + 'logout?token' + user.token;

    localStorage.clear();

    await axios.get(herokuLogin);
    user_ = null;
    dispatch({
      type: Types.Init,
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
    navigate.push('/');
    navigate.reload();
  };

  useEffect(() => {
    user_ = localStorage.getItem('user');
    if (user_) {
      dispatch({
        type: Types.Init,
        payload: {
          isAuthenticated: true,
          user: user_,
        },
      });
    } else {
      dispatch({
        type: Types.Init,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  if (!state.isInitialized) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'heroku',
        //@ts-ignore
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
