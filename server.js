'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
export default function (number, locale) {
  return number.toLocaleString(locale);
};