import React, { useContext } from 'react';
import '../Movies/Moviee.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux' ;
import ChangeCounter from '../store/Action/counterAction.js' 
import { languageContext } from '../Context/languageContext.js';

export default function Navbar () {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item ">
                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/Movies" className="nav-link" href="#">Movies</Link>
                    </li>
                    
                    <li className="nav-item ">
                    <Link to="/Favourite" className="nav-link disabled">Favourite</Link>
                    </li>
                    {/* <li>{counter}</li> */}
                    
                </ul>
                
                </div>
            </div>
        </nav>
    )
}
