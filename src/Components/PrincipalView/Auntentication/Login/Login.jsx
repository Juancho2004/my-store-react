import { useLogin } from "../../../../Hooks/useLogin";
import "./login.css";

export function Login() {
  const { username, password, handleLogin, handleChange } = useLogin();

  return (
    <section className="login-overlay">
      <div className="login">
        <h2>Enter your username to log in</h2>
        <form onSubmit={handleLogin} className="login__form">
          <div className="form__group">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
              className="form__input"
              placeholder=" "
            />
            <label htmlFor="username" className="form__label">Username</label>
          </div>
          <div className="form__group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="form__input"
              placeholder=" "
            />
            <label htmlFor="password" className="form__label">Password</label>
          </div>
          <button type="submit" className="form__button">Login</button>
        </form>
      </div>
    </section>
  );
}
