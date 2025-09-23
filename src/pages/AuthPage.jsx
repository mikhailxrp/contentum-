import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";

function AuthPage() {
  return (
    <div className="auth-page">
      <div className="auth-back-button">
        <Link to="/" className="back-btn">
          ← Назад на главную
        </Link>
      </div>
      <AuthForm />
    </div>
  );
}

export default AuthPage;
