import { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "saramatos" && password === "test") {
      setShowError(false);
      setUser(username);
      navigate("/articles");
    } else {
      setShowError(true);
    }
  }

  return (
    <div className="login-page">
      <div>
        <h1>WELCOME TO NC NEWS</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>

        <button>Login</button>
      </form>
      {showError && (
        <ErrorAlert
          message={"Incorrect password or username. Please try again!"}
        />
      )}
    </div>
  );
}

export default LoginPage;
