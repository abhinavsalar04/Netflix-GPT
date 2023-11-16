import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
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
    return (
        <div className="absolute w-screen px-6 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt = "logo"
                />
            { 
                <div className="flex p-2">
                    <img
                        className="w-10 rounded-[100%] m-4"
                        alt="userIcon" src="https://avatars.githubusercontent.com/u/96479797?v=4" 
                    />
                    <button
                        onClick={signoutHandler}
                        className="text-[rgb(229,9,20)]  bg-black h-10 px-2 mx-2 rounded-md my-[14px] bg-opacity-50">
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;