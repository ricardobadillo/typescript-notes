"use strict";
function parseString(input) {
    if (Array.isArray(input)) {
        return input.join("");
    }
    else {
        return input.split("");
    }
}
const responseArray = parseString('Ricardo');
const responseString = parseString(['1', '2', '3']);
