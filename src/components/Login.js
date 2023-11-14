import Header from "./Header";
import {useState} from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="background"
            />
            </div>
            <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
                <h1 className="font-bold text-3xl py-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm &&
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                    /> 
                }
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                />
                  
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-[rgb(51,51,51)] rounded-md focus:bg-[rgb(51,51,51)]" 
                />
                <button 
                    className="p-4 my-6 text-white bg-[rgb(229,9,20)] w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4" >
                {
                    isSignInForm 
                        ? (
                            <p>
                                New to Netflix?{' '}
                                <span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>
                                Sign Up Now
                                </span>
                            </p>
                        )
                        : (
                            <p>
                                Already signed up?{' '}
                                <span className="cursor-pointer hover:underline" onClick={toggleSignInForm}>
                                Sign In Now
                                </span>
                            </p>
                        )
                    }

                </p>
            </form>
        </div>
    )
}

export default Login;