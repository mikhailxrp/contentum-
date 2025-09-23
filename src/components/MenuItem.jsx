function MenuItem({ icon, label, isActive = false, onClick }) {
  return (
    <button
      className={`menu-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="menu-icon">{icon}</span>
      <span className="menu-label">{label}</span>
    </button>
  );
}

export default MenuItem;
