"use strict";

class SystemError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.errorCode = 1;
    this.name = "System Error";
  }
}

class VerifyParameterError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.errorCode = 2;
    this.name = "Verify Parameter Error";
  }
}

class UserKeyInvalidationPlsContactHoymiles extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.errorCode = 100;
    this.name = "User Key Invalidation Pls Contact Hoymiles";
  }
}

class PermissionDenied extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.errorCode = 101;
    this.name = "Permission Denied";
  }
}

module.exports = { SystemError, VerifyParameterError, UserKeyInvalidationPlsContactHoymiles, PermissionDenied };
