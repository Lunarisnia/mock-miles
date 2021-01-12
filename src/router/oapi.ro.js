"use strict";

const { stationPowerOfTheDay } = require("../controller/oapi.co");

module.exports = (router) => {
  router.post("/0/findStationPower", stationPowerOfTheDay);
};
