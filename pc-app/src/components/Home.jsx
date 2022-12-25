import laptop from '../assets/img/laptop.png';

function Home(props){
    const { isLogged } = props;
    return (
        <>
        <div className="main-container container text-center px-0">
        <h1 className='h1 text-light mt-5'>PC App</h1>
        {!isLogged && 
            <div className='my-container'>
                <div className='col-8'>
                    <img className='col-6 mx-auto' src={laptop} alt="laptop" width={150} />
                <div className='col-6 mx-auto'>
                    <a href="/register" rel='noopener' className='d-inline-block mx-1 btn btn-primary'>Registrarse</a>
                    <a href="/login" rel='noopener' className='d-inline-block mx-1 btn btn-primary'>Iniciar sesión</a>
                </div>
                </div>        
            </div>}
        </div>
        </>
    )
}
export default Home;