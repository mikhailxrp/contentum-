import MenuItem from "./MenuItem.jsx";

function Header({ title, activeTab, onTabClick, tabs = [] }) {
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
