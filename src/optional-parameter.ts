const createPerson = (
        id: string | number, 
        name: string,
        lastName?: string,
        status?: boolean
    ) => {
        
        return {
            id, 
            name, 
            lastName: lastName || 'Sin apellido',
            status: status ?? false
        };
};

const person = createPerson(10, 'Ricardo', 'Badillo');
const otherPerson = createPerson(20, 'Javier');

console.log(person);
console.log(otherPerson);