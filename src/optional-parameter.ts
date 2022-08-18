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

const p1 = createPerson(10, 'Ricardo', 'Badillo');
const p2 = createPerson(20, 'Javier');

console.log(p1);
console.log(p2);