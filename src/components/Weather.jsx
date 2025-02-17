import { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("날씨 데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <p>날씨 정보를 가져오는 중...</p>;

  return (
    <div className="weather-box">
      <h3> 오늘의 {weather.name} 날씨</h3>
      <p>온도: {weather.main.temp}°C / {weather.weather[0].description}</p>
    </div>
  );
}

export default Weather;
