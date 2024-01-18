const submit = document.getElementById("submit");
const locationInput = document.getElementById("location");
const weather = document.getElementById("weather");

const apiKey = " c18ac18f95f5429b80a132952241701";

submit.addEventListener("click", () => {
    const locationValue = locationInput.value;
    if (locationValue) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=c18ac18f95f5429b80a132952241701&q=London&aqi=nohttps://api.weatherapi.com/v1/current.json?key=c18ac18f95f5429b80a132952241701&q=London`)
            .then(response => response.json())
            .then(data => {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const locationName = data.name;

                weather.innerHTML = `
                    <h2>${locationName}</h2>
                    <p>${temp}°C - ${description}</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weather.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
            });
    } else {
        weather.innerHTML = "<p>Please enter a location.</p>";
    }
});