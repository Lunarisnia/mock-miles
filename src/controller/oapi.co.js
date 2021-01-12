"use strict";

const { powerOfTheDay } = require("../service/oapi/stationPower");

const stationPowerOfTheDay = async (req, res) => {
  try {
    const potd = await powerOfTheDay(req.body.startTime, req.body.endTime);
    res.send(potd);
  } catch (error) {
    throw error;
  }
};

module.exports = { stationPowerOfTheDay };
