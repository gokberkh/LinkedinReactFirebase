import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://avatars.githubusercontent.com/u/25930033?v=4"
        />
        <h2>Gökberk Hıdıroğlu</h2>
        <h4>gokberkhdrgl@gmail.com</h4>
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
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
}
