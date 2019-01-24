/* eslint-disable eol-last */
import {
  errorResponse,
} from '../utilities/responseformat';

export default (req, res, next) => {
  const {
    id,
  } = req.params;
  const newId = parseInt(id, 10);

  if (!newId) {
    return errorResponse(res, 422, 'Invalid id.');
  }
  req.params.id = newId;
  return next();
};