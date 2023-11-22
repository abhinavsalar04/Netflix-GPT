import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  

    const signoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
          }).catch((error) => {
             console.log(error.message);
          });
    }


    // intitially when this useEffect was inside body comonent we were able to /browse without login
    // But as we have put this in Header means each time header renders onAuthStateChange will be called and do not allow us to access browse without login    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, displayName, email, photoURL} = user;
            dispatch(addUser({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL
            }));
    
            // due to this whenever a use logged in user will be redirect to /browse page
            // Still if we try to access the "/" route then also user will be redirect to the /browse page
            navigate("/browse");
          } else {
    
            dispatch(removeUser());
            navigate("/");
          }
        });

        // Unsubscribe to the onAuthStateChange when ever we are not using Header(unmounting Header)
        return () => unsubscribe();
      }, []);

      const handleShowGptSearch = () => {
          dispatch(toggleGptSearchView());
      }


      const changeLanguageHandler = (event) => {
        // console.log(event.target.value);
        dispatch(changeLanguage(event.target.value));
      }
    return (
        <div className="absolute w-screen md:px-6 md:py-4  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img 
                className="w-44 mx-auto md:mx-0"
                src={NETFLIX_LOGO}
                alt = "logo"
                />
            { user &&
                <div className="flex p-2 justify-between  md:m-0">
                    {
                      showGptSearch && 
                      <div className="flex">
                        <select 
                          onChange={changeLanguageHandler}
                          className="text-gray-300 bg-[rgb(51,51,51)] h-10 px-2 mx-4 md:mx-6 rounded-md md:my-[14px] bg-opacity-80 font-bold text-sm md:text-md ">
                          {
                            SUPPORTED_LANGUAGES.map((lang) => (
                                <option 
                                  
                                  key={lang.identifier} 
                                  value={lang.identifier}>
                                  {lang.name}
                                </option>)
                              )
                          }
                        </select>
                      </div>
                    }
                    
                    <button
                      onClick={handleShowGptSearch}
                      className="text-gray-300 md:bg-[rgb(194,17,26)]  bg-gradient-to-b from-red-600 to-[rgb(43,25,25)] h-10 px-2 mx-4 md:mx-2  rounded-md md:my-[14px] bg-opacity-90 font-bold text-sm md:text-md">
                      GPT Search
                    </button>
                    <img
                        className="hidden md:block w-10 h-10 rounded-[100%] m-4"
                        alt="userIcon" src={USER_AVATAR} 
                    />
                    <button
                        onClick={signoutHandler}
                        className="text-gray-300  md:bg-[rgb(194,17,26)] bg-gradient-to-b from-red-600 to-[rgb(43,25,25)] h-10 px-2 mx-4 md:mx-2 rounded-md md:my-[15px] bg-opacity-90 font-bold text-sm md:text-md">
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;