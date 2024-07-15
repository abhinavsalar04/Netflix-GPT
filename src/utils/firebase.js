// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBohSCMvz5uiWwzyJUJxyHRT-UPcCDklh4',
  authDomain: 'netflixgpt-2a77a.firebaseapp.com',
  projectId: 'netflixgpt-2a77a',
  storageBucket: 'netflixgpt-2a77a.appspot.com',
  messagingSenderId: '708055511611',
  appId: '1:708055511611:web:0def4fba40f0c8d7d5a21e',
  measurementId: 'G-GYJQSMZVSH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
