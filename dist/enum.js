"use strict";
var Direcciones;
(function (Direcciones) {
    Direcciones["Arriba"] = "Up";
    Direcciones["Abajo"] = "Down";
    Direcciones["Izquierda"] = "Left";
    Direcciones["Derecha"] = "Right";
})(Direcciones || (Direcciones = {}));
const direction = Direcciones.Abajo;
console.log('Dirección: ', direction);
