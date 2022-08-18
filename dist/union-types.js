"use strict";
function passLengthID(id) {
    if (typeof id === "string") {
        console.log(id.length);
    }
    else {
        console.log(id.toString.length);
    }
}
