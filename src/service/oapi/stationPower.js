"use strict";
const { SystemError } = require("../utils/errorTypes");

const powerOfTheDay = async (startTime, endTime) => {
  try {
    const resp = { status: 0, message: "success", data: {} };
    resp.data[startTime] = 9;
    resp.data[endTime] = 9;
    return resp;
  } catch (error) {
    throw new SystemError();
  }
};

module.exports = { powerOfTheDay };
