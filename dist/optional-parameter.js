"use strict";
const createPerson = (id, name, lastName, status) => {
    return {
        id,
        name,
        lastName: lastName || 'Sin apellido',
        status: status !== null && status !== void 0 ? status : false
    };
};
const person = createPerson(10, 'Ricardo', 'Badillo');
const otherPerson = createPerson(20, 'Javier');
console.log(person);
console.log(otherPerson);
