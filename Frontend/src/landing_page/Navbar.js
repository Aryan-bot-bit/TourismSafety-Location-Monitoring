
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use

function Navbar({ isAuthenticated, onLogout }) {
    return ( 
         <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/log.png" style={{ width: "10%" }} alt="Logo" />
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/product">Places</Link>
                        </li>
                        <li className="nav-item">
  <Link
    className="nav-link active"
    to="/pricing"
    onClick={(e) => {
      e.preventDefault();
      if (window.confirm("Are you sure you want to share your live location and information?")) {
        window.open("http://localhost:3001/", "_blank");
      }
    }}
  >
    SOS
  </Link>
</li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/support">Support</Link>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <a className="nav-link active" href="http://localhost:3001/" target="_blank" rel="noopener noreferrer"></a>
                            </li>
                        )}

                        {!isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">
                                        <button type="button" className="btn btn-danger">Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/signup">
                                        <button type="button" className="btn btn-warning">
                                             Signup
                                        </button>
                                    </Link>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <li className="nav-item">
                                <button className="btn btn-success" onClick={onLogout}>Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
