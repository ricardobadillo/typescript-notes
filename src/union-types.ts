function passLengthID(id: string | number) {
    if (typeof id === "string") {
        console.log(id.length);
    } else {
        console.log(id.toString.length);
    }
}