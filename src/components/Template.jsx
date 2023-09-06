import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function Template({title, desc1, desc2, formtype, image, setLoggedIn}){
    return(
        <div>
            <div>
                
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === 'signup' ?
                (<SignupForm setLoggedIn={setLoggedIn}/>) : (<LoginForm setLoggedIn={setLoggedIn}/>)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div>
                <img src={frameImage}
                alt='img'
                 width={558}
                 height={504}
                 loading="lazy"/>

                <img src={image}
                alt='img'
                 width={558}
                 height={490}
                 loading="lazy"/>
            </div>
        </div>
    );
}


export default Template