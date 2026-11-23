
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="home-button">
        <Home size={18} /> Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
