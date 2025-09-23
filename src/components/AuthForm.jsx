import { useState } from "react";
import { useLoginMutation } from "../store/api/baseApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "./Loader.jsx";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const result = await login({ email, password });
        if (result.data) {
          dispatch(setCredentials(result.data));
          navigate(from, { replace: true });
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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

        <form className="auth-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader size="small" variant="dots" />
            ) : isLogin ? (
              "Войти"
            ) : (
              "Зарегистрироваться"
            )}
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
