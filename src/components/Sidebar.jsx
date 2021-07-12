import React from "react";
import "./Sidebar.css";
import {
  Home,
  Timeline,
  TrendingUp,
  Person,
  AttachMoney,
  Email,
  Feedback,
  Message,
  WorkOutline,
  ErrorOutline,
  Storefront,
  Equalizer,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItems active">
                <Home className="sidebarIcons" />
                Home
              </li>
            </Link>

            <li className="sidebarListItems">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItems ">
                <Person className="sidebarIcons" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItems">
                <Storefront className="sidebarIcons" />
                Products
              </li>
            </Link>
            <li className="sidebarListItems">
              <AttachMoney className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItems">
              <Equalizer className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <Email className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItems">
              <Feedback className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <Message className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other Stuff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <WorkOutline className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <ErrorOutline className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
