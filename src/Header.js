import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption.js";
import { useDispatch } from "react-redux";
import { auth } from "./firebaseConfig";
import { logout } from "./features/userSlice";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          alt="Linkedin Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
