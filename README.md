# Features
- Login/Sign Up
    - Sign In/Sign Up Form
    - Redirect to Browse Page
- Browse  (After authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & sescription
        - Movie Suggestions
             - Movie Lists (verticle scrollable)

- Movie Details Page
    - Main Conatiner
        - Movie poster
        - Title, overview, runtime, writer, director details
    - Secondary Page
        - Top cast
        - Similar and recommended movies sugegestions
- NetflixGPT
    - Search Bar
    - Multilingual Search bar
    - Movie Suggestions


# Snnapshots

Login/Sign Up page

![Login_SignUp_Page](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/1b527e53-5b5a-4ccf-8da6-36854bda181d)



Main Page 

![BrowsePage](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/58604cfd-670c-4637-a5af-cc24682d672c)


Main Page movie suggestions

![BrowsePage_Suggestions](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/72fe3250-d51e-4229-99ca-5dafb3acce07)


GPT Search Page 

![GPTSearchPage](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/a2bb6f4c-f434-49ce-b3f3-793748e4754f)


GPT Search Page multilingual feature

![GptSearchPage_Multilingual](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/c60fe7cb-bd30-400a-8df9-bb664aea2c17)



Movie Details Page 

![MovieDetailsPage](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/cfa57ad9-cecd-4b97-bea6-881ac4fc1722)



Movie Details Page watch trailer

![MovieDetailsPage_watchTrailer](https://github.com/abhinavsalar18/Netflix-GPT/assets/96479797/3208fd5c-3e3f-401d-9d90-9fb95cf439b0)







# Netflix GPT Diary

- Create React App
- Configured Tailwindcss
- Header 
    - Logo and background image
- App routing
- Login Form
- Sign Up Form
- Form Validation
    - useRef hook
- Firebase Setup
- Deploying App on Firebase
- Create Sign Up user account
- Implemented Sing in/ Sign Up API
- Created Redux Store and userSlice
- Sign Out Implemented
- Store updated using signed in user data
- Update Profile API 
- BugFix: Sign up user displayName and profile picture update
- Bugfix: If the user is not logged in redirect /browse to "/" -> login page and vice-versa
- Unsubscribed to the onAuthStateChanged callack
- Add harcoded values to the constants file   
- Register TMDB API & create an App & get access token
- Get data frim TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create moviesSlice
- Update Store with movies data
- Planning to create browse page - Main Container, Secondary Container
- Fetch Data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make main container look awesome
- Build Seconadary container
- Build Movie List
- Build Movies Card
- TMDB Movie Poster CDN
- Made the browse page amazing with tailwind css
- usePopularMovies, UpcomingMovies, topRatedMovies custom hook
- GPT Search feature
- Gpt Search Bar implemented
- Gpt Search Show/Hide toggle button implemented using gptSlice store data
- Config Slice added to store for dynamic language data
- Gpt Multilingual Search Bar implemented - Hindi, English, Spanish
-  Get Open AI API key
- Get Search API call
- Fetched movies suggested by GPT from TMDB
- created gptSLice and added fetched gpt movies and teir details
- Reused MovieList comonent to show GPT sugggested movies
- Memoization
- Adding .env file to make API key secure
- Made our App responsive
- Movie details page added
- similar movies state added in store
- similar movies custom hook added
- watch trailer video functionality added






