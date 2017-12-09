window.onload = function(){

	var citiesContainer = document.getElementById('citiesContainer');
	var weatherContainer = document.getElementById('weatherContainer');
	var selectedCityID = cities[0].id;
	var selectedCity;

	getWeather(selectedCityID, showWeathers);

	showCities(cities, citiesContainer);

	function showCities(cities, container){
		
		for (var city of cities) {
			var cityEl = document.createElement('li');
			cityEl.setAttribute('class', 'city');
			cityEl.innerHTML = city.name;

			if(selectedCityID === city.id) {
				selectedCity = cityEl;
				cityEl.classList.add('active');
			}

			cityEl.onclick = cityClick.bind(null, city.id);
			container.appendChild(cityEl);
		}
	}

	function cityClick(cityId, e) {
		if(e.target.classList.contains('active')) {
			return false;
		}
		selectedCity.classList.remove('active');
		e.target.classList.add('active');
		selectedCity = e.target;

		getWeather(cityId, showWeathers)
	}


	function showWeathers(weathers) {
		weatherContainer.innerHTML = '';
		weathers.data && weathers.data.forEach((weather) => {
			var weatherEl = document.createElement('div');
			weatherEl.setAttribute('class', 'weather');
			
			var dateEl = document.createElement('div');
			dateEl.setAttribute('class', 'weather-date');
			var dateArray = weather.datetime.split(':');
			dateEl.innerHTML = `${dateArray[0]} <span>${dateArray[1]}:00</span>`
			
			weatherEl.appendChild(dateEl);

			var detailsEl = document.createElement('div');
			detailsEl.setAttribute('class', 'weather-detail');

			var iconEl = document.createElement('img');
			iconEl.setAttribute('src', `icons/${weather.weather.icon}.png`);
			detailsEl.appendChild(iconEl);

			var descriptionEl = document.createElement('div');
			descriptionEl.setAttribute('class', 'description');
			descriptionEl.innerHTML = `
				<p>${weather.weather.description}</p>
				<p>Temp: ${weather.temp} C</p>
			`;

			detailsEl.appendChild(descriptionEl);

			weatherEl.appendChild(detailsEl);

			weatherContainer.appendChild(weatherEl);
		})
	}
}

