import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar
          className="sidebar__avatar"
          src="https://avatars.githubusercontent.com/u/25930033?v=4"
        />
        <h2>Gökberk Hıdıroğlu</h2>
        <h2>gokberkhdrgl@gmail.com</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">5,858</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">5,858</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
}
