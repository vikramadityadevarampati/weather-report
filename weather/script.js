// script.js
// script.js
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');

searchButton.addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    console.log(response); // Log the response object

    if (!response.ok) {
        // Log the error message from the response
        const errorData = await response.json();
        console.error('Error:', errorData);
        weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
        return;
    }

    const data = await response.json();
    console.log(data); // Log the weather data

    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
});
