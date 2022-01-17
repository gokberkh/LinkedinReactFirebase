import React from "react";
import "../styles/HeaderOption.css";
import { Avatar, Badge } from "@material-ui/core";

export default function HeaderOption({
  avatar,
  Icon,
  title,
  onClick,
  badgeContent,
}) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && (
        <Badge badgeContent={badgeContent} overlap="circular" color="secondary">
          <Icon className="headerOption__icon" />
        </Badge>
      )}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}
