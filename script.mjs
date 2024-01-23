I see, it seems like there might be an issue with the way the `locationValue` is being retrieved from the input field. Let's update the `fetchWeather` function to properly use the user input for the location. Also, let's ensure that the API URL is constructed with the correct location value.

```javascript
function fetchWeather() {
    const locationValue = locationInput.value;
    if (locationValue) {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationValue}&aqi=no`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temp = data.current.temp_c;
                const description = data.current.condition.text;
                const locationName = data.location.name;

                weather.innerHTML = `
                    <h2>${locationName}</h2>
                    <p>Temperature ${temp}°C - ${description}</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weather.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
            });
    } else {
        weather.innerHTML = "<p>Please enter a location.</p>";
    }
}
```

Make sure that the `locationInput` variable is correctly referencing the input field in your HTML. Additionally, ensure that the API key is valid and that the `submit` button and `locationInput` are correctly referenced in your HTML.

If the issue persists, it might be helpful to check the browser console for any error messages that could provide more information about what might be going wrong.
