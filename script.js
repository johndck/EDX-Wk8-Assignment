/** Create the default city and date for the app
 * takes in the city variable
 * uses the day.js library
 */

const cityDate = (city) => {
  // get today's date
  // get the city
  // create the <h1> element inside the section
  let currentDate = dayjs();
  let formatDate = currentDate.format("DD/M/YYYY");
  $("#today").append(`<h2>${city} (${formatDate})</h2>`);
};

const getLongLang = async (locationQuery) => {
  let limit = 1;
  let apiKey = "2a7e07fe638ea604b92f79e5f876f590";
  let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&limit=${limit}&appid=${apiKey}`;

  const response = await fetch(queryURL);
  const data = await response.json();
  let results = [data[0].name, data[0].lat, data[0].lon];
  return results;
};

const fetchWeatherDetails = async (locationDetails) => {
  let longLang = await getLongLang(locationDetails);
  let latdetails = longLang[1];
  let longdetails = longLang[2];
  console.log(latdetails);
  console.log(longdetails);

  // Get the weather details
  // Here is the api details page: >> https://openweathermap.org/current

  let queryURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latdetails}&lon=${longdetails}&appid=2a7e07fe638ea604b92f79e5f876f590&units=metric`;

  const response = await fetch(queryURL);
  const data = await response.json();
  console.log("success data returned");
  // today
  console.log(`temp: ${data.main.temp}`);
  console.log(`wind: ${data.wind.speed}kph`);
  console.log(`humidity: ${data.main.humidity}%`);
  //console.log(data.list[0].dt_txt, data.list[0].main.temp);
  //console.log(data.list[39].dt_txt, data.list[39].main.temp);

  // At the data to the page

  let currentDate = dayjs();
  let formatDate = currentDate.format("DD/M/YYYY");

  let forecastSummaryEl = $("<div>");
  let tempEl = $("<p>").text(`Temp: ${data.main.temp}`);
  let windEl = $("<p>").text(`Wind: ${data.wind.speed}kph`);
  let humidityEl = $("<p>").text(`Temp: ${data.main.humidity}%`);

  forecastSummaryEl.append(tempEl, windEl, humidityEl);

  $("#today").append(
    `<h2>${locationDetails} (${formatDate})</h2>`,
    forecastSummaryEl
  );
};

fetchWeatherDetails("Cambridge");

const fetchWeatherForecast = (locationDetails) => {
  // Get Lat & long details for the forecast API

  let locationQuery = locationDetails;
  getLongLang(locationQuery).then((results) => {
    let latdetails = results[1];
    let longdetails = results[2];
    //console.log(`Lat: ${latdetails}, long: ${longdetails}`);

    // Fetch the weather forecast data
    // Use the basic FETCH API method

    let queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latdetails}&lon=${longdetails}&appid=2a7e07fe638ea604b92f79e5f876f590&units=metric`;

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let forecast = data.list;
        console.log(forecast);
        //console.log(forecast);
        //console.log(forecast.length);
        // what is the current hour
        let currentHour = dayjs().hour();
        console.log(currentHour);
        if (currentHour >= 9 && currentHour < 12) {
          let day1Temp = forecast[4].main.temp;
          let day1Wind = forecast[4].wind.speed;
          let day1Humitidy = forecast[4].main.humidity;
          let day1icon = forecast[4].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[12].main.temp;
          let day2Wind = forecast[12].wind.speed;
          let day2Humitidy = forecast[12].main.humidity;
          let day2icon = forecast[12].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[20].main.temp;
          let day3Wind = forecast[20].wind.speed;
          let day3Humitidy = forecast[20].main.humidity;
          let day3icon = forecast[20].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[28].main.temp;
          let day4Wind = forecast[28].wind.speed;
          let day4Humitidy = forecast[28].main.humidity;
          let day4icon = forecast[28].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[36].main.temp;
          let day5Wind = forecast[36].wind.speed;
          let day5Humitidy = forecast[36].main.humidity;
          let day5icon = forecast[36].weather[0].icon;
          // output the dailyforecast
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 12 && currentHour < 15) {
          alert("creating the variables");
          let day1Temp = forecast[3].main.temp;
          let day1Wind = forecast[3].wind.speed;
          let day1Humitidy = forecast[3].main.humidity;
          let day1icon = forecast[3].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[11].main.temp;
          let day2Wind = forecast[11].wind.speed;
          let day2Humitidy = forecast[11].main.humidity;
          let day2icon = forecast[11].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[19].main.temp;
          let day3Wind = forecast[19].wind.speed;
          let day3Humitidy = forecast[19].main.humidity;
          let day3icon = forecast[19].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[27].main.temp;
          let day4Wind = forecast[27].wind.speed;
          let day4Humitidy = forecast[27].main.humidity;
          let day4icon = forecast[27].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[35].main.temp;
          let day5Wind = forecast[35].wind.speed;
          let day5Humitidy = forecast[35].main.humidity;
          let day5icon = forecast[35].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 15 && currentHour < 18) {
          let day1Temp = forecast[2].main.temp;
          let day1Wind = forecast[2].wind.speed;
          let day1Humitidy = forecast[2].main.humidity;
          let day1icon = forecast[2].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[10].main.temp;
          let day2Wind = forecast[10].wind.speed;
          let day2Humitidy = forecast[10].main.humidity;
          let day2icon = forecast[10].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[18].main.temp;
          let day3Wind = forecast[18].wind.speed;
          let day3Humitidy = forecast[18].main.humidity;
          let day3icon = forecast[18].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[26].main.temp;
          let day4Wind = forecast[26].wind.speed;
          let day4Humitidy = forecast[26].main.humidity;
          let day4icon = forecast[26].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[34].main.temp;
          let day5Wind = forecast[34].wind.speed;
          let day5Humitidy = forecast[34].main.humidity;
          let day5icon = forecast[34].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 18 && currentHour < 21) {
          let day1Temp = forecast[i + 1].main.temp;
          let day1Wind = forecast[i + 1].wind.speed;
          let day1Humitidy = forecast[i + 1].main.humidity;
          let day1icon = forecast[i + 1].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[i + 9].main.temp;
          let day2Wind = forecast[i + 9].wind.speed;
          let day2Humitidy = forecast[i + 9].main.humidity;
          let day2icon = forecast[i + 9].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[i + 17].main.temp;
          let day3Wind = forecast[i + 17].wind.speed;
          let day3Humitidy = forecast[i + 17].main.humidity;
          let day3icon = forecast[i + 17].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[i + 25].main.temp;
          let day4Wind = forecast[i + 25].wind.speed;
          let day4Humitidy = forecast[i + 25].main.humidity;
          let day4icon = forecast[i + 25].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[i + 33].main.temp;
          let day5Wind = forecast[i + 33].wind.speed;
          let day5Humitidy = forecast[i + 33].main.humidity;
          let day5icon = forecast[i + 33].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 21 && currentHour < 0) {
          let day1Temp = forecast[i].main.temp;
          let day1Wind = forecast[i].wind.speed;
          let day1Humitidy = forecast[i].main.humidity;
          let day1icon = forecast[i].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[8].main.temp;
          let day2Wind = forecast[8].wind.speed;
          let day2Humitidy = forecast[8].main.humidity;
          let day2icon = forecast[8].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[16].main.temp;
          let day3Wind = forecast[16].wind.speed;
          let day3Humitidy = forecast[16].main.humidity;
          let day3icon = forecast[16].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[24].main.temp;
          let day4Wind = forecast[24].wind.speed;
          let day4Humitidy = forecast[24].main.humidity;
          let day4icon = forecast[24].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[32].main.temp;
          let day5Wind = forecast[32].wind.speed;
          let day5Humitidy = forecast[32].main.humidity;
          let day5icon = forecast[i32].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 0 && currentHour < 3) {
          let day1Temp = forecast[7].main.temp;
          let day1Wind = forecast[7].wind.speed;
          let day1Humitidy = forecast[7].main.humidity;
          let day1icon = forecast[7].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[15].main.temp;
          let day2Wind = forecast[15].wind.speed;
          let day2Humitidy = forecast[15].main.humidity;
          let day2icon = forecast[15].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[23].main.temp;
          let day3Wind = forecast[23].wind.speed;
          let day3Humitidy = forecast[23].main.humidity;
          let day3icon = forecast[23].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[31].main.temp;
          let day4Wind = forecast[31].wind.speed;
          let day4Humitidy = forecast[31].main.humidity;
          let day4icon = forecast[31].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[39].main.temp;
          let day5Wind = forecast[39].wind.speed;
          let day5Humitidy = forecast[39].main.humidity;
          let day5icon = forecast[39].weather[0].icon;
          // output the forecast
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 3 && currentHour < 6) {
          let day1Temp = forecast[6].main.temp;
          let day1Wind = forecast[6].wind.speed;
          let day1Humitidy = forecast[6].main.humidity;
          let day1icon = forecast[6].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[15].main.temp;
          let day2Wind = forecast[15].wind.speed;
          let day2Humitidy = forecast[15].main.humidity;
          let day2icon = forecast[15].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[23].main.temp;
          let day3Wind = forecast[23].wind.speed;
          let day3Humitidy = forecast[23].main.humidity;
          let day3icon = forecast[23].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[31].main.temp;
          let day4Wind = forecast[31].wind.speed;
          let day4Humitidy = forecast[31].main.humidity;
          let day4icon = forecast[31].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[39].main.temp;
          let day5Wind = forecast[39].wind.speed;
          let day5Humitidy = forecast[39].main.humidity;
          let day5icon = forecast[39].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }

        // read out the forecast and pass into the dom
      })
      .then((dailyforecast) => {
        console.log(dailyforecast);

        // Loop through and check this in ful.

        for (let i = 0; i <= 2; i++) {
          // create the elements for each forecast item:

          let forecastTemp = $("<p>");
          forecastTemp.text(`Temp: ${i + 1}: ${dailyforecast[i][i]}`);
          let forecastWind = $("<p>");
          forecastWind.text(`Wind: ${i + 1}: ${dailyforecast[i][i]}kph`);
          let forecastHumidity = $("<p>");
          forecastHumidity.text(`Hum: ${dailyforecast[i][i + 2]}`);
          let forecastIcon = $("<img>");
          forecastIcon.attr("alt", "omg");

          // append these elements into a div:

          let dayForecastBlockEL = $("<div>");
          dayForecastBlockEL.append(
            forecastTemp,
            forecastWind,
            forecastHumidity,
            forecastIcon
          );

          $("#forecast-details").append(dayForecastBlockEL);
        }
      });
  });
};

fetchWeatherForecast("Cambridge");
