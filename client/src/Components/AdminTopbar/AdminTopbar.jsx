import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { StyledAdminTopbar } from "./styled.jsx";

export default function AdminTopbar() {
  return (
    <StyledAdminTopbar>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">adminpanel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon className="icon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsOutlinedIcon className="icon" />
          </div>
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </StyledAdminTopbar>
  );
}
