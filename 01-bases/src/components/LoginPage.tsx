import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const { isChecking, isAuthenticated, loginWithEmailAndPassword, logout } = useAuthContext();

    if (isChecking) {
        return <div>Checking...</div>
    }

    return (

        <div>
            {isAuthenticated
                ? (
                    <div>
                        <h1>
                            Bienvenido
                        </h1>
                        <button className='mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 font-medium shadow-sm'
                            onClick={()=> logout()}
                        >
                            Salir
                        </button>
                    </div>
                ) :
                <div>
                    <h1>
                        Ingresar a la aplicacion
                    </h1>
                    <button className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm'
                        onClick={() => loginWithEmailAndPassword('phos@example.com', '123456')}
                    >
                        Ingresar
                    </button>
                </div>
            }
        </div>
    )
}
