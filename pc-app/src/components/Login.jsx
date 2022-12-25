import laptop from '../assets/img/laptop.png';

function Login(){
    return (
        <div className="main-container container text-center px-0">
        <h1 className='h1 text-light mt-5'>Login</h1> 
            <div className='my-container'>
                <div className='col-8'>
                    <img className='col-3 mx-auto' src={laptop} alt="laptop" width={150} />
                <div className='col-6 mx-auto'>
                    <form action="POST">
                        <div className="form-group">
                            <label htmlFor="email" className='text-light'>Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Escribe tu email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='text-light'>Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Escribe tu contraseña" />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </form>
                </div>
                </div>        
            </div>
        </div>
    )
}
export default Login;