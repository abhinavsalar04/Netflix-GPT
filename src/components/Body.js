import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL
        }));

        navigate("/browse");
      } else {

        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Login></Login>
    </div>
  )
}

export default Body;