import React from "react";
import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Everstore Admin</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
