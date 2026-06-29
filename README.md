# skye

This is a weather application built with React, Vite, and designed to provide current weather information and forecasts.

## Features

- Current weather display
- Weather forecast for upcoming days
- Search functionality for different locations
- Responsive design

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- OpenWeatherMap API (or similar weather API)

## Project Structure

```
skye/
├── public/
├── src/
│   ├── assets/ (Static assets like images, icons)
│   ├── components/ (Reusable UI components)
│   │   ├── ForecastCard.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── hooks/ (Custom React hooks)
│   │   └── useWeather.js
│   ├── pages/ (Application pages)
│   │   ├── About.jsx
│   │   ├── Forecast.jsx
│   │   └── Home.jsx
│   ├── services/ (API service integrations)
│   │   └── weatherApi.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Abukiya/react-weather-app.git
    cd react-weather-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add your API key:
    ```
    VITE_WEATHER_API_KEY=YOUR_API_KEY
    ```
    Replace `YOUR_API_KEY` with your actual API key from OpenWeatherMap or another weather service.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

-   Enter a city name in the search bar to get current weather and forecast information.
-   Navigate through the application using the Navbar.
