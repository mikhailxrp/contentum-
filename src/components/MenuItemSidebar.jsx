import { Link } from "react-router-dom";

function MenuItemSidebar({ icon, label, isActive = false, onClick, to }) {
  const path =
    to === "create-product" ? "/dashboard/create-product" : `/dashboard/${to}`;
  return (
    <Link
      to={path}
      className={`menu-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="menu-icon">{icon}</span>
      <span className="menu-label">{label}</span>
    </Link>
  );
}

export default MenuItemSidebar;
