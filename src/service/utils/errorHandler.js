"use strict";
const errorHandler = (err, _req, res, _next) => {
  const { name, statusCode, errorCode, message } = err;
  console.log(err);

  switch (name) {
    default:
      return res
        .status(statusCode || 500)
        .json(
          errorFormatter(
            errorCode || 1001,
            name || "InternalError",
          )
        );
  }
};

const errorFormatter = (id, name) => {
  return { status: id, message: name, data: "" };
};

module.exports = { errorHandler };
