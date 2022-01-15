import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import LanguageIcon from "@material-ui/icons/Language";
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
      <div class="header__container">
        <div className="header__left">
          <img
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
            alt="Linkedin Logo"
          />
          <div className="header__search">
            <div class="search__icon">
              <SearchIcon />
            </div>
            <input placeholder="Search" type="text"></input>
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" badgeContent={3} />
          <HeaderOption
            Icon={SupervisorAccountIcon}
            title="My Network"
            badgeContent={9}
          />
          <HeaderOption
            Icon={BusinessCenterIcon}
            title="Jobs"
            badgeContent={11}
          />
          <HeaderOption Icon={ChatIcon} title="Messaging" badgeContent={9} />
          <HeaderOption
            Icon={NotificationsIcon}
            title="Notifications"
            badgeContent={8}
          />

          <HeaderOption
            avatar={true}
            title="Logout"
            onClick={logoutOfApp}
            badgeContent={4}
          />
          <div className="header__right__end">
            <div class="vr" />
            <HeaderOption Icon={AppsIcon} title="Work " badgeContent={3} />
            <HeaderOption Icon={LanguageIcon} title="Language " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
