import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");
    if (redirectPath) {
      sessionStorage.removeItem("redirect");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null; // No UI needed
}

export default RedirectHandler;
