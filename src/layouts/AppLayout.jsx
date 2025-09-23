import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

function ProductPage() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("create-product");

  const handleSidebarItemClick = (itemId) => {
    setActiveSidebarItem(itemId);
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeItem={activeSidebarItem}
        onItemClick={handleSidebarItemClick}
        to={activeSidebarItem}
      />
      <div className="main-layout">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductPage;
