import { useState } from 'react'
import laptop from './assets/img/laptop.png'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  
  return (
    <>
    <div className="main-container container text-center px-0">
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="#">PC-app</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white fw-500" href="#">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className={!isLogged ? "nav-link disabled" : "nav-link"} href="#">Ver stock</a>
          </li>
          <li className="nav-item">
            <a className={!isLogged ? "nav-link disabled" : "nav-link"} href="#">Añadir stock</a>
          </li>
        </ul>
      </div>
    </nav>
      <h1 className='h1 text-light mt-5'>PC App</h1>
      {!isLogged && 
      <div className='my-container'>
        <div className='col-8'>
          <img className='col-6 mx-auto' src={laptop} alt="laptop" width={150} />
          <div className='col-6 mx-auto'>
          <a href="#" rel='noopener' className='d-inline-block mx-1 btn btn-primary'>Registrarse</a>
          <a href="#" rel='noopener' className='d-inline-block mx-1 btn btn-primary'>Iniciar sesión</a>
          </div>
        </div>        
      </div>}
    </div>
    </>
  )
}

export default App
