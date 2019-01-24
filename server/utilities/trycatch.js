/* eslint-disable eol-last */
import {
  errorResponse,
} from './responseformat';

const tryCatch = controller => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
  return true;
};

export default tryCatch;