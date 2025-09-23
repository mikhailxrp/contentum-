import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">КОНТЕНТУМ+</h1>
          <p className="auth-subtitle">
            Создавайте контент-стратегии с помощью ИИ
          </p>
        </div>

        <div className="auth-toggle">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={handleToggle}
          >
            Вход
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={handleToggle}
          >
            Регистрация
          </button>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>

          {isLogin && (
            <div className="auth-footer">
              <a href="#" className="forgot-password">
                Забыли пароль?
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
