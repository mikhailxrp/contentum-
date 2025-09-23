import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const selectAuth = (state) => state.auth;

export default function PrivateRoute() {
  const { status } = useSelector(selectAuth);
  const location = useLocation();

  if (status === "authenticated") {
    return <Outlet />;
  }
  if (status === "guest") {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return <Navigate to="/auth" state={{ from: location }} replace />;
}
