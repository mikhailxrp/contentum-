import MenuItem from "./MenuItem.jsx";

function Sidebar({ activeItem, onItemClick }) {
  const menuItems = [
    { id: "create-product", icon: "📝", label: "Создать продукт" },
    { id: "video-content", icon: "🎬", label: "Видео контент" },
    { id: "create-image", icon: "🎨", label: "Создать изображение" },
    { id: "ai-chat", icon: "💬", label: "AI-Чат" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">C</span>
          <span className="logo-text">Контентум+</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">M</div>
          <div className="user-info">
            <div className="user-name">Jon dow</div>
            <div className="user-settings">Настройки</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
