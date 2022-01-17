import React, { useEffect } from "react";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Feed from "./components/Feed.js";
import Login from "./components/Login.js";
import Widgets from "./components/Widgets.js";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import { auth } from "./firebaseConfig";
import "./styles/App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
