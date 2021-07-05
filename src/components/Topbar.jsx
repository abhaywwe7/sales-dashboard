import React from "react";
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topWrapper">
        <div className="topLeft">
          <span className="logoheading">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topRightIconConatiner">
            <NotificationsNone />
            <span className="topRightIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
