import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<any>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: {
          profilePicture: "person/9.jpeg",
          coverPicture: "",
          followers: [],
          followings: ["624c80dced7bd20016eea61d"],
          isAdmin: true,
          _id: "624c748ea9fc5c5d8cd344d4",
          username: "john",
          email: "john@gmail.com",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGM3NDhlYTlmYzVjNWQ4Y2QzNDRkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc3MzU0MCwiZXhwIjoxNjUwMDMyNzQwfQ.ZvXuT_7sAzPkp6roPlsOW-1hxVr69e88JGed5zR3dEQ",
        },
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
