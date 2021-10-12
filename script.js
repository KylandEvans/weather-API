const API = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "ee8ce78823bbe13034b8ef805e2d5333";
const submitButton = document.getElementById("submit-button");
const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");
const locationName = document.getElementById("location");
const zipCode = document.getElementById("zipCode");
let units = "imperial";
let cityInput = document.getElementById("cityInput");
let tempData = document.getElementById("temp-data");
let realFeelData = document.getElementById("real-feel-data");
let humidityData = document.getElementById("humidity-data");
let windSpeedData = document.getElementById("wind-speed-data");

function getWeatherData() {
	if (cityInput.value) {
		let request =
			`${API}${cityInput.value}&appid=${apiKey}&units=${units}`.replace(
				" ",
				"%20"
			);
		console.log(request);
		fetch(request)
			.then(res => res.json())
			.then(data => {
				tempData.innerHTML = data.main.temp.toFixed(0);
				realFeelData.innerHTML = data.main.feels_like.toFixed(0);
				humidityData.innerHTML = data.main.humidity.toFixed(0);
				windSpeedData.innerHTML = data.wind.speed.toFixed(0);
				locationName.innerHTML = `The weather for ${data.name} is: `;
			});
	} else {
		let request =
			`${API}${zipCode.value},us&appid=${apiKey}&units=${units}`.replace(
				" ",
				"%20"
			);
		console.log(request);
		fetch(request)
			.then(res => res.json())
			.then(data => {
				tempData.innerHTML = data.main.temp.toFixed(0);
				realFeelData.innerHTML = data.main.feels_like.toFixed(0);
				humidityData.innerHTML = data.main.humidity.toFixed(0);
				windSpeedData.innerHTML = data.wind.speed.toFixed(0);
				locationName.innerHTML = `The weather for ${data.name} is: `;
				console.log(data.name);
			});
	}
}

submitButton.addEventListener("click", getWeatherData);
metric.addEventListener("click", () => {
	if (metric.checked === true) {
		imperial.checked = false;
		units = "metric";
	}
});

imperial.addEventListener("click", () => {
	if (imperial.checked === true) {
		metric.checked = false;
		units = "imperial";
	}
});

zipCode.addEventListener("input", () => {
	cityInput.value = null;
});

cityInput.addEventListener("input", () => {
	zipCode.value = null;
});
