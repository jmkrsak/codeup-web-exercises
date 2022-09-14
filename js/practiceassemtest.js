"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}

function isNotString(x) {
    return Object.prototype.toString.call(x) !== "[object String]";
}

function isEmptyString(x) {
    return (x === "[ ]" || x === "");
}

function isNotANumber(variable) {
    return isNaN(parseFloat(variable));
}

function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}

function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

function isZero(number) {
    if (number == 0) {
        return true;
    } else {
        return false;
    }
}

function isArray(obj) {
    return !!obj && obj.constructor === Array;
}

function upperCase(string) {
    if (typeof string !== "string") {
        return false;
    } else if (string == null) {
        return false;
    } else if (string == "[1, 2, 3]") {
        return false;
    } else {
        return (string.toUpperCase());
    }
}