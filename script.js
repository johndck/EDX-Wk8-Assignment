// Connect up the search button

let noCityrecord;
const getLongLang = async (locationQuery) => {
  let limit = 1;
  let apiKey = "2a7e07fe638ea604b92f79e5f876f590";
  let queryURL = `https://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&limit=${limit}&appid=${apiKey}`;

  try {
    const response = await fetch(queryURL);
    const data = await response.json();
    if (data.length === 0) {
      noCityrecord = true;
      return noCityrecord;
    } else {
      let results = [data[0].name, data[0].lat, data[0].lon];
      return results;
    }
  } catch (error) {
    console.log("error getting the data", error);
    alert("we have no data to show");
    noCityrecord = true;
    console.log(noCityrecord);
    return;
  }
};

const fetchWeatherDetails = async (locationDetails) => {
  let longLang = await getLongLang(locationDetails);

  if (noCityrecord) {
    return;
  }

  // error handling

  let latdetails = longLang[1];
  let longdetails = longLang[2];

  // Get the weather details
  // Here is the api details page: >> https://openweathermap.org/current

  let queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latdetails}&lon=${longdetails}&appid=2a7e07fe638ea604b92f79e5f876f590&units=metric`;

  const response = await fetch(queryURL);
  const data = await response.json();
  //console.log("success data returned");
  // today
  //console.log(`temp: ${data.main.temp}`);
  //console.log(`wind: ${data.wind.speed}kph`);
  //console.log(`humidity: ${data.main.humidity}%`);

  // Add the data to the page

  console.log(data);
  console.log(data.weather[0].icon);

  let currentDate = dayjs();
  let formatDate = currentDate.format("DD/M/YYYY");

  let forecastSummaryEl = $("<div>");
  let weatherIconEl = $("<img>");
  weatherIconEl.attr(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  let tempEl = $("<p>").text(`Temp: ${Math.round(data.main.temp)} ºC`);
  let windEl = $("<p>").text(`Wind: ${Math.round(data.wind.speed)} mph`);
  let humidityEl = $("<p>").text(`Temp: ${data.main.humidity}%`);

  forecastSummaryEl.append(weatherIconEl, tempEl, windEl, humidityEl);

  /// add let iconEl =

  $("#today").append(`<h2>${locationDetails} (${formatDate})</h2>`);
  $("#today").append(forecastSummaryEl);
  //forecastSummaryEl
};

let successForecastdisplayed;
let locationQuery;
const fetchWeatherForecast = (locationDetails) => {
  // Get Lat & long details for the forecast API

  locationQuery = locationDetails;
  getLongLang(locationQuery).then((results) => {
    let latdetails = results[1];
    let longdetails = results[2];

    // Fetch the weather forecast data
    // Use the basic FETCH API method

    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latdetails}&lon=${longdetails}&appid=2a7e07fe638ea604b92f79e5f876f590&units=metric`;

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let forecast = data.list;

        // what is the current hour
        let currentHour = dayjs().hour();

        // Retrieve the local storage item and read it into the history section

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
          let day1Temp = forecast[1].main.temp;
          let day1Wind = forecast[1].wind.speed;
          let day1Humitidy = forecast[1].main.humidity;
          let day1icon = forecast[1].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[9].main.temp;
          let day2Wind = forecast[9].wind.speed;
          let day2Humitidy = forecast[9].main.humidity;
          let day2icon = forecast[9].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[17].main.temp;
          let day3Wind = forecast[17].wind.speed;
          let day3Humitidy = forecast[17].main.humidity;
          let day3icon = forecast[17].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[25].main.temp;
          let day4Wind = forecast[25].wind.speed;
          let day4Humitidy = forecast[25].main.humidity;
          let day4icon = forecast[25].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[33].main.temp;
          let day5Wind = forecast[33].wind.speed;
          let day5Humitidy = forecast[33].main.humidity;
          let day5icon = forecast[33].weather[0].icon;
          let dailyforecast = [
            [day1Temp, day1Wind, day1Humitidy, day1icon],
            [day2Temp, day2Wind, day2Humitidy, day2icon],
            [day3Temp, day3Wind, day3Humitidy, day3icon],
            [day4Temp, day4Wind, day4Humitidy, day4icon],
            [day5Temp, day5Wind, day5Humitidy, day5icon],
          ];
          return dailyforecast;
        }
        if (currentHour >= 21) {
          let day1Temp = forecast[0].main.temp;
          let day1Wind = forecast[0].wind.speed;
          let day1Humitidy = forecast[0].main.humidity;
          let day1icon = forecast[0].weather[0].icon;
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
          let day5icon = forecast[32].weather[0].icon;
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
        if (currentHour >= 6 && currentHour < 9) {
          let day1Temp = forecast[5].main.temp;
          let day1Wind = forecast[5].wind.speed;
          let day1Humitidy = forecast[5].main.humidity;
          let day1icon = forecast[5].weather[0].icon;
          // Day 2 data
          let day2Temp = forecast[13].main.temp;
          let day2Wind = forecast[13].wind.speed;
          let day2Humitidy = forecast[13].main.humidity;
          let day2icon = forecast[13].weather[0].icon;
          // Day 3 data
          let day3Temp = forecast[21].main.temp;
          let day3Wind = forecast[21].wind.speed;
          let day3Humitidy = forecast[21].main.humidity;
          let day3icon = forecast[21].weather[0].icon;
          // Day 4 data
          let day4Temp = forecast[29].main.temp;
          let day4Wind = forecast[29].wind.speed;
          let day4Humitidy = forecast[29].main.humidity;
          let day4icon = forecast[29].weather[0].icon;
          // Day 5 data
          let day5Temp = forecast[37].main.temp;
          let day5Wind = forecast[37].wind.speed;
          let day5Humitidy = forecast[37].main.humidity;
          let day5icon = forecast[37].weather[0].icon;
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
        // Loop through and check this in ful.
        // Create the holding div and make it flex
        let forecastHeadingEl = $("<h1>");
        forecastHeadingEl.text("5 Day Forecast");
        forecastHeadingEl.addClass("row");
        forecastHeadingEl.attr("id", "headingForecast");
        let forecastHoldingEl = $("<div>");
        forecastHoldingEl.addClass("row");

        /*
        forecastHoldingEl.addClass(
          "d-flex flex-row flex-wrap justify-content-evenly gap-1"
        );
        */

        forecastHoldingEl.attr("id", "daysForecast");

        for (let i = 0; i < dailyforecast.length; i++) {
          // create the forecast dates (manually)
          let forecastTodayDate = dayjs();
          let forecastDay = forecastTodayDate.add(i + 1, "day");
          let newForecastDate = $("<h5>");
          newForecastDate.text(forecastDay.format("DD/M/YYYY"));

          let forecastIcon = $("<img>");
          forecastIcon.attr(
            "src",
            `https://openweathermap.org/img/wn/${dailyforecast[i][3]}.png`
          );
          let forecastTemp = $("<p>");
          forecastTemp.text(`Temp: ${Math.round(dailyforecast[i][0])} ºC`);
          let forecastWind = $("<p>");
          forecastWind.text(`Wind: ${Math.round(dailyforecast[i][1])} mph`);
          let forecastHumidity = $("<p>");
          forecastHumidity.text(`Humidity: ${dailyforecast[i][2]}%`);
          // append these elements into a div:

          let dayForecastBlockEL = $("<div>");
          dayForecastBlockEL.addClass(
            "col-2-lg col-6 custom-background rounded forecast-card mb-2 me-2"
          );
          dayForecastBlockEL.addClass("text-white");
          dayForecastBlockEL.append(
            newForecastDate,
            forecastIcon,
            forecastTemp,
            forecastWind,
            forecastHumidity
          );
          forecastHoldingEl.append(dayForecastBlockEL);
        }
        $("#forecast").append(forecastHeadingEl);
        $("#headingForecast").after(forecastHoldingEl);
        // Save successful search

        if ($("#daysForecast").children().length == 5) {
          saveSearchTerm(locationQuery);
          searchInput.value = "";
        }
      });
  });
};

// Save City Search Record (only if a successful search executed)

const saveSearchTerm = (searchTerm) => {
  let savedSearches = JSON.parse(localStorage.getItem("forecastSearchHistory"));

  if (savedSearches == null) {
    let newSearchEvent = JSON.stringify([{ searchCity: searchTerm }]);
    localStorage.setItem("forecastSearchHistory", newSearchEvent);
    searchHistory();
  } else {
    // loop through to see if city is already saved

    for (let i = 0; i < savedSearches.length; i++) {
      let existingSavedCity = savedSearches[i].searchCity;

      if (existingSavedCity === searchTerm) {
        return;
      }
    }
    newSearchEvent = { searchCity: searchTerm };
    savedSearches.push(newSearchEvent);
    let updateEvents = JSON.stringify(savedSearches);
    localStorage.setItem("forecastSearchHistory", updateEvents);

    searchHistory();
    return;
  }
};

const searchHistory = () => {
  let checkHistory = JSON.parse(localStorage.getItem("forecastSearchHistory"));
  if (checkHistory == null) {
    return;
  } else {
    // we have a search history
    // create the dynamic buttons:
    $("#history").empty();
    for (let i = 0; i < checkHistory.length; i++) {
      // empty the children & re-add full list
      let buttonEl = $("<button>");
      buttonEl.text(checkHistory[i].searchCity);
      buttonEl.attr("data-city", checkHistory[i].searchCity);
      buttonEl.addClass("btn mt-2 btn-secondary col-12");
      $("#history").append(buttonEl);
    }
  }

  const historyEl = document.querySelector("#history");
  const handleClick = (event) => {
    event.stopImmediatePropagation();
    if (event.target.matches("button")) {
      let city = event.target.dataset.city;
      event.target.removeEventListener("click", handleClick);

      if (
        $("#today").children().length > 0 &&
        $("#forecast").children().length > 0
      ) {
        $("#today").empty();
        $("#forecast").empty();
      }

      fetchWeatherDetails(city);
      fetchWeatherForecast(city);
    }
  };

  historyEl.addEventListener("click", handleClick);

  //fetchWeatherDetails(city);
};

/** Here is the main code for the search button */
// ============================================== //
// ============================================== //

// Get the search input text box & search button:
let searchInput = document.querySelector("#search-input");
let searchCity = document.querySelector("#search-button");

// Add the event listener to the search button
// Note jQuery does not support calling async functions via the event listener, hence why using native javascript

searchCity.addEventListener("click", async function (event) {
  event.preventDefault();

  /** Handle initial mistakes made by the user such as searching with blank input values..... */

  if (!/^[A-Za-z\s]+$/.test(searchInput.value)) {
    $("#alertModal").modal("show");
    return;
  }
  if (
    $("#today").children().length > 0 &&
    $("#forecast").children().length > 0
  ) {
    $("#today").empty();
    $("#forecast").empty();
  }

  await fetchWeatherDetails(searchInput.value);

  // exit function if no city is found & reset input box when city is not found
  if (noCityrecord) {
    //alert("Unfortunately we can't find your city.");

    $("#alertModal-noCity").modal("show");

    searchInput.value = "";
    noCityrecord = false;
    return;
  }

  fetchWeatherForecast(searchInput.value);

  // call function to add historic search button and display on the aside section.
  // add search to
});

searchHistory();
