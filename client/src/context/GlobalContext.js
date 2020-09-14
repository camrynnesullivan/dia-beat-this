import React, { useReducer, createContext, useContext } from "react";
import {
  LOGIN,
  LOGOUT,
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  LOADING,
} from "./actions";

// create the context
const GlobalContext = createContext();
// get the provider from the new context
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
      };
    case LOGIN:
      return {
        ...state,
        user: action.user,
      };

    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false,
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    posts: [],
    currentPost: {
      _id: 0,
      date: "",
      body: "",
    },
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     posts: [],
//     currentPost: {
//       _id: 0,
//       title: "",
//       body: "",
//       author: ""
//     },
//     favorites: [],
//     loading: false
//   });
//   return <Provider value={[state, dispatch]} {...props} />;
// };
// const useStoreContext = () => {
//   return useContext(StoreContext);
// };
// export { StoreProvider, useStoreContext };
