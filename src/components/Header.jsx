import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/");
  }

  return (
    <header>
      <div className="header-content">
        <h1>NC NEWS</h1>
        <p>Hello {user}!</p>
      </div>
      <button className="header-button" onClick={navigateToLogin}>
        Log out
      </button>
    </header>
  );
}

export default Header;
