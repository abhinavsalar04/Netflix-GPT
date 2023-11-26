import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import Body from './components/Body';
import MovieDetails from './components/movieDetails/MovieDetails';
import GptSearchPage from './components/gptSearchPage/GptSearchPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <Body />
  },
  {
      path: "/browse",
      element: <Browse />
  },
  {
    path: "/movieDetails",
    element: <MovieDetails />
  },
  {
    path: "gpt_search",
    element: <GptSearchPage />
  }
])
root.render(
  // due to React.StrictMode the API calls or many other operations performed
  // twice to identify whether there is an inconsistency in rendering cycle or not
  // <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
          <App />
      </RouterProvider>
    </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
