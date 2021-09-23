import "../assets/css/login.scss";
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div class="container">
      <div className="form-group">
      <h5>Register</h5>
          <ul className="form-list">
            <li className="form-input-item">
                <label><i class="fas fa-user"></i></label>
              <input type="text" placeholder="email or phone" />
            </li>
            <li className="form-input-item">
            <label><i class="fas fa-lock"></i></label>
              <input type="password" placeholder="password" />
            </li>
            <li className="form-input-item">
            <label><i class="fas fa-lock"></i></label>
              <input type="password" placeholder="confirm password" />
            </li>
            <li className="form-input-item">
                <p className="privacy">By registering you agree to Apollo shop term of <span>service</span> & <span>privacy policy</span></p>
              <button>Register</button>
              <p>already have an account <i class="fas fa-long-arrow-alt-down"></i> <span><Link to="/log-in">sign in</Link></span></p>
            </li>
          </ul>
      </div>
    </div>
  );
};
