import React from "react";
import "./Sidebar.css";
import { Home, Timeline, TrendingUp } from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <Home />
              Home
            </li>
            <li className="sidebarListItems">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
