import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, user }) {
  console.log(user)
  if (user !== 'administrador') {
    return <Navigate to="/" replace />;
  }

  return children;
}
