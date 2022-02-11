import React from "react";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import { StyledAdminSidebar } from "./styled.jsx";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <StyledAdminSidebar>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleOutlinedIcon className="sidebarIcon" />
              Menu
            </li>
            <Link to="products">
              <li className="sidebarListItem">
                <Inventory2OutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="users">
              <li className="sidebarListItem">
                <ManageAccountsOutlinedIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="categories">
              <li className="sidebarListItem">
                <CategoryOutlinedIcon className="sidebarIcon" />
                Categories
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </StyledAdminSidebar>
  );
}
