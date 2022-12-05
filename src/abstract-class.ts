export {};
// Restringir la creación de objetos de la clase padre.

abstract class Persona {
    constructor(public id: number | string, public name: string) {}

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
}

class Estudiante extends Persona {
    constructor(public id: number | string, public name: string, public grade: string) {
        super(id, name);
        this.grade = grade;
    }
}

// const persona = new Persona();   ---> Error.

const estudiante = new Estudiante(1, 'Ricardo', '1ro'); // Ok.