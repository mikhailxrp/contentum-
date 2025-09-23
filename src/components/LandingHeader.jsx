import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <header className="landing-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <span className="logo-icon">C</span>
              <span className="logo-text">Контентум+</span>
            </div>
          </div>

          <nav className="header-nav">
            <Link to="/auth" className="nav-link">
              Вход
            </Link>
            <Link to="/auth" className="nav-link nav-link-primary">
              Регистрация
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
