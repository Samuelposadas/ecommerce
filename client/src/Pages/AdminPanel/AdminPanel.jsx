import React from "react";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import AdminTopbar from "../../Components/AdminTopbar/AdminTopbar";
import { Outlet } from "react-router-dom";

import { StyledAdminPanel } from "./styledAdminPanel";

// Página principal del panel del administrador
// Rendiriza un Topbar y un Sidebar en todas las ocaciones
// En Outlet renderiza la paginas de administración degun el path matcheado

export default function AdminPanel() {
  return (
    <StyledAdminPanel>
      <AdminTopbar />
      <div className="container">
        <AdminSidebar />
        <Outlet />
      </div>
    </StyledAdminPanel>
  );
}
