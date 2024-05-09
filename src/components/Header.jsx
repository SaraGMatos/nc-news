import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/");
  }

  return (
    <header className="page-header">
      <div className="header-content">
        <h1>NC NEWS</h1>
      </div>
      <button className="header-button" onClick={navigateToLogin}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </header>
  );
}

export default Header;
