export {};

type ID = string | number;

const crearPersona = (id: ID, name: string, lastName?: string, status?: boolean) => {
    return { id, name, lastName: lastName || 'Sin apellido', status: status ?? false };
};

// { id: 10, name: "Ricardo", lastName: "Badillo", status: false }
const persona = crearPersona(10, 'Ricardo', 'Badillo');

// { id: 10, name: "Ricardo", lastName: "Sin apellido", status: true }
const otraPersona = crearPersona(10, 'Ricardo', undefined, true); 