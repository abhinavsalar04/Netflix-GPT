// netflix logo, background image, user avatar, movie poster CDN
// ====================================================================================================================================================================
export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/96479797?v=4";

export const MOVIE_POSTER_CDN = "https://image.tmdb.org/t/p/w500";

export const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/original";

export const MOVIE_DETAILS_BASE_URL = "https://api.themoviedb.org/3/movie/";

// ====================================================================================================================================================================
// ====================================================================================================================================================================
// OpenAI API key options 
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_TOKEN,
  }
};
// openAI API KEY
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// ====================================================================================================================================================================
// ====================================================================================================================================================================
// Supported languages for multilingual feature on GPT Search 
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English"}, 
  { identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"},
  {identifier: "french", name: "French"}
];

// ====================================================================================================================================================================
// ====================================================================================================================================================================

