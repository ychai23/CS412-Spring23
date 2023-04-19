const config = require('./config.json');
const express = require("express");
const axios = require("axios");
const redis = require("redis");
const cors=require('cors');

const app = express();

const port = 3001;
app.set('port', port);
app.use(cors())

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function fetchApiData(city) {
  const apiResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}`
  );
  return apiResponse.data;
}

async function getWeather(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  const city = req.params.city;
  let results;
  let isCached = false;

  try {
    const cacheResults = await redisClient.get(city);
    if (cacheResults) {
      isCached = true;
      results = JSON.parse(cacheResults);
    } else {
      results = await fetchApiData(city);
      if (results.length === 0) {
        throw "API returned an empty array";
      }
      await redisClient.set(city, JSON.stringify(results));
    }

    res.send({results,
    });

  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}

app.get("/weather/:city/", getWeather);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;