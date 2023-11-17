import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);


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
    return (
        <div className="absolute w-screen px-6 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44"
                src={NETFLIX_LOGO}
                alt = "logo"
                />
            { user &&
                <div className="flex p-2">
                    <img
                        className="w-10 rounded-[100%] m-4"
                        alt="userIcon" src={USER_AVATAR} 
                    />
                    <button
                        onClick={signoutHandler}
                        className="text-white  bg-[rgb(194,17,26)] h-10 px-2 mx-2 rounded-md my-[14px]">
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;