import '../assets/css/header.scss';
import { Nav } from "./Nav";
import { Search } from './Search';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row row-align">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="logo">
              <Link to="/">Athena</Link>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <Search />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">
            <Nav />
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};
