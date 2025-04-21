# 🎬 MovieMania — An IMDb Clone Built with React

Welcome to **MovieMania**, a stylish and functional IMDb-inspired movie app built with ⚛️ **React**. This application showcases all the latest movies and allows users to explore in-depth details, save favorites, and plan their watchlist! 🍿

---

## ✨ Features

🔍 **Browse & Search Movies**
- Explore trending and latest releases  
- Powerful search bar to find your favorite films instantly  

📄 **Movie Details Page**
- 🎥 Title, 🎭 Overview, 📆 Release Date  
- ⭐ Average Rating, ⏱️ Runtime  
- 👨‍🎤 Cast (with actor photos)  
- ▶️ Official Trailer and Teasers (from YouTube)
- 🎞️ Related videos to enhance your movie experience

❤️ **Favorites**
- Add movies you loved
- Easily access all your favorite picks

📺 **Watchlist**
- Keep track of what you want to watch next
- Great for movie planning with friends or solo sessions

🎯 **Recommendations** *(Coming Soon)*  
- Get suggestions based on your favorite genres or liked movies  

---

## 🧰 Tech Stack

- **React.js** – Frontend UI
- **React Router** – Routing between pages
- **TMDb API** – Fetching movies, trailers, and cast data
- **YouTube API** – Embedding trailers and related videos
- **LocalStorage** – Persisting favorites and watchlist

---

## 📂 Folder Structure
📁 src/
│
├── 📁 components/          
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   └── ThemeToggle.jsx
│
├── 📁 pages/              
│   ├── Home.jsx
│   ├── Favorites.jsx
│   ├── Watchlist.jsx
│   ├── MovieDetails.jsx
│   └── Recommendations.jsx (coming soon)
│
├── 📁 services/           
│   └── api.js
│
├── 📁 css/             
│   ├── Home.css
│   ├── Favorites.css
│   ├── Watchlist.css
│   ├── MovieDetails.css
│   |── App.css
│   |── Navbar.css  
|   |── ThemeToggle.css
│   |── MovieDetails.css
│   |──index.css
│
│
├── 📁 contexts/
│    ├── MovieContext.jsx
│    ├──  ThemeContext.jsx
│ 
├── App.js                 
├── index.js              
└── routes.js              
