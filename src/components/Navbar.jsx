import { toast } from 'react-hot-toast';
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = ({isLoggedIn, setLoggedIn}) =>{
    return(
        <div className='flex justify-evenly'>
            <Link to='/'>
                <img src={logo} alt="logo"/>
            </Link>

            <nav>
                <ul className='flex gap-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex ml-5 mr-3 gap-3'>
                {   !isLoggedIn &&
                    <Link to='/login'>
                        <button>
                            Log In
                        </button>
                    </Link>
                }

                {   !isLoggedIn &&
                    <Link to='/signup'>
                        <button>
                            Sign Up
                        </button>
                    </Link>
                }

                {   isLoggedIn &&
                    <Link to='/'>
                        <button onClick={() =>{
                            setLoggedIn(false);
                            toast.success('Logged Out');
                        }}>
                            Log Out
                        </button>
                    </Link>
                }

                {   isLoggedIn &&
                    <Link to='/dashboard'>
                        <button>
                           Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar