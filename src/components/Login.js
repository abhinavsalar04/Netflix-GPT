import { validateFields } from "../utils/validate";
import Header from "./Header";
import {useState, useRef} from "react"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (event) => {
        // validate form data

        if(event.target.innerText === "Sign Up" && (!name || name?.current.value === "")){
            setErrorMessage("All fields are mandatory");
            return;
        }
        const errorMsg = validateFields(
            email.current.value, 
            password.current.value
        );
        // console.log(errorMsg);
        setErrorMessage(errorMsg);

        if(errorMessage) return;

        if(!isSignInForm){
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User signed up: ", user);

                updateProfile(auth.currentUser, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR,
                  }).then(() => {
                    const {uid, displayName, email, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL
                    }));
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage("Error Code: " + errorCode + " - " + errorMessage);
                // ..
            });
        }
        else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in: ", user);
                console.log(auth.currentUser);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setErrorMessage("Error Code: " + errorCode + " - " + errorMessage);
            });
        }
        // sign in / sign up
    }
    return (
        <div >
            <Header />
            <div className="absolute">
            <img className="h-screen w-screen object-cover bg-gradient-to-tr from-black  to-red-500" src={NETFLIX_BG} 
                alt="background"
            />
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="absolute mx-[8px] w-[96%] md:min-w-[450px] md:min-h-[500px] bg-black md:w-3/12 p-12 my-36 md:mx-auto left-0 right-0 text-white rounded-md bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm &&
                    <input 
                        ref={name}
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                    /> 
                }
                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email ID" 
                    className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                />
                  
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                />
                <p className="text-[rgb(232,124,3)] text-lg py-2">{errorMessage}</p>
                <button 
                    onClick={handleButtonClick}
                    className="p-4 my-6 text-white bg-[rgb(229,9,20)] w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <div className="py-4" >
                {
                    isSignInForm 
                        ? (
                            <p>
                                <span className="text-gray-500">New to Netflix?</span>{' '}
                                <span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>
                                Sign Up Now
                                </span>
                            </p>
                        )
                        : (
                            <p>
                                <span className="text-gray-500">Already signed up?</span>{' '}
                                <span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>
                                Sign In Now
                                </span>
                            </p>
                        )
                    }

                </div>
            </form>
        </div>
    )
}

export default Login;