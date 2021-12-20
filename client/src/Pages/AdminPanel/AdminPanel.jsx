import React from "react";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import AdminTopbar from "../../Components/AdminTopbar/AdminTopbar";
import { StyledAdminPanel } from "./styledAdminPanel";

export default function AdminPanel() {
  return (
    <StyledAdminPanel>
      <AdminTopbar />
      <div className="container">
        <AdminSidebar />
        <div className="otherPages">other pages</div>
      </div>
    </StyledAdminPanel>
  );
}
