/* eslint-disable eol-last */
const successResponse = (res, statusCode, message, data) => {
  const response = {
    status: statusCode,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

const successfullLogin = (res, statusCode, message, token, data) => {
  const response = {
    status: statusCode,
    message,
    token,
    data,
  };
  return res.status(statusCode).json(response);
};


const errorResponse = (res, statusCode, message) => {
  const response = {
    status: statusCode,
    error: message,
  };
  return res.status(statusCode).json(response);
};

export {
  successResponse,
  errorResponse,
  successfullLogin,
};