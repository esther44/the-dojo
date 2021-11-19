import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import { useAuthContext } from "../hooks/useAuthContext";

import Temple from "../assets/temple.svg";
import "./Navbar.scss";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" onClick={logout}>
                Login out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
