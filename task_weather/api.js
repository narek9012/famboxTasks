var apiKey = '2373aa1f98b44f899f96307d0b975a4d'

function getWeather( cityId, callback ) {
	var request = new XMLHttpRequest();

	request.open(
		'GET',
		`http://api.weatherbit.io/v2.0/forecast/3hourly?city_id=${cityId}&key=${apiKey}`,
		true
	);

	request.onreadystatechange = function() {
	  if (request.readyState != 4) return;

	  callback(JSON.parse(request.responseText));

	}

	request.send();
}