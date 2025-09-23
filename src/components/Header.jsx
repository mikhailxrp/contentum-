import MenuItem from "./MenuItem.jsx";

function Header({ title, activeTab, onTabClick }) {
  const tabs = [
    { id: "product", icon: "📋", label: "Продукт" },
    { id: "content-plan", icon: "📊", label: "Контент план" },
    { id: "articles", icon: "📝", label: "Статьи" },
    { id: "integrations", icon: "🔗", label: "Интеграции" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="page-title">{title}</h1>
        <nav className="header-tabs">
          {tabs.map((tab) => (
            <MenuItem
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => onTabClick(tab.id)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
