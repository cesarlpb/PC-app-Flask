import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"

function Navbar(props){
    const [isHome, setIsHome] = useState(false)
    const location = useLocation();
    useEffect(() => { 

        setIsHome(location.pathname === '/')

        // console.log('hash', location.hash);
        // console.log('pathname', location.pathname);
        // console.log('search', location.search);
        // console.log(window.location.pathname) 
    }, [])
    const { isLogged } = props;
    return (
        <nav className="navbar navbar-expand">
            <a className="navbar-brand d-inline-block" href="/">PC-app</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarsExample02" 
                    aria-controls="navbarsExample02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav justify-content-around mt-2">
                <li className="nav-item">
                <a className={isHome ? "nav-link text-white fw-500 underline" : "nav-link text-white fw-500"} 
                    href="/">Inicio 
                <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className={!isLogged ? "nav-link text-white" : "nav-link"} href="/stock">Ver stock</a>
                </li>
                <li className="nav-item">
                <a className={!isLogged ? "nav-link disabled" : "nav-link"} href="#">Añadir stock</a>
                </li>
            </ul>
            </div>
        </nav>
        )
}

export default Navbar;