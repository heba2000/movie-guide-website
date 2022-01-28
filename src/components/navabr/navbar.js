import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  const history = useHistory();
  const favoritesNumber = useSelector((state) => state.favoritesCount )
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container py-3" >
          <a className="navbar-brand text-red " >
          <FontAwesomeIcon icon="video" className='me-3'/> Movie Guide
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Favorites">Favorites ({favoritesNumber}) </Link>
              </li>
            </ul>
            <button className='btn bg-red text-white'
                onClick={() => history.push('/Login')}> 
                Login
            </button>

          </div>
        </div>
      </nav> 

    </>

  );
}

export default Nav;
