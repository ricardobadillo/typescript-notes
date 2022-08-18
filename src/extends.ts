export {}

interface Persona {
    nombre: string;
    edad: number;
    readonly saludo?: string; // Solo lectura.
}; 

interface Empleado extends Persona {
    salario: number;
}

const empleado: Empleado = {
    nombre: 'Ricardo',
    edad: 27,
    salario: 2500
};