import React from "react";
import "./Topbar.css";
import avatar from "../images/circle-cropped.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topWrapper">
        <div className="topLeft">
          <span className="logoheading">Admin-Panel</span>
        </div>
        <div className="topRight">
          <div className="topRightIconConatiner">
            <NotificationsNone />
            <span className="topRightIconBadge">2</span>
          </div>
          <div className="topRightIconConatiner">
            <Language />
            <span className="topRightIconBadge">2</span>
          </div>
          <div className="topRightIconConatiner">
            <Settings />
          </div>
          <img src={avatar} alt="" className="topImager" />
        </div>
      </div>
    </div>
  );
}
