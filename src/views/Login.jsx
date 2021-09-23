import "../assets/css/login.scss";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div class="container">
      <div className="form-group">
      <h5>Login</h5>
          <ul className="form-list">
            <li className="form-input-item">
                <label><i class="fas fa-user"></i></label>
              <input type="text" placeholder="username" />
            </li>
            <li className="form-input-item">
            <label><i class="fas fa-lock"></i></label>
              <input type="password" placeholder="password" />
              <p>forget password</p>
            </li>
            <li className="form-input-item">
              <button>Login</button>
              <p>to register an account <i class="fas fa-long-arrow-alt-down"></i> <span><Link to="/register">sing up</Link></span></p>
            </li>
          </ul>
      </div>
    </div>
  );
};
