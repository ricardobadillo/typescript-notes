export {};

interface Persona {
    nombre: string;
    edad: number;
    readonly saludo?: string; // Solo lectura. No se puede modificar.
};

interface Empleado extends Persona {
    salario: number;
};

const empleado: Empleado = {
    edad: 27,
    nombre: 'Ricardo',
    salario: 2500,
    saludo: 'Hola'
};

console.log(empleado);