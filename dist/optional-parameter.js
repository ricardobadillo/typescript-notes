"use strict";
const createPerson = (id, name, lastName, status) => {
    return {
        id,
        name,
        lastName: lastName || 'Sin apellido',
        status: status !== null && status !== void 0 ? status : false
    };
};
const p1 = createPerson(10, 'Ricardo', 'Badillo');
const p2 = createPerson(20, 'Javier');
console.log(p1);
console.log(p2);
