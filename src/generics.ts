// Genéricos en funciones.
function getValue<T>(value: T): T {
    return value;
}

let iAmString = getValue<string>('Soy un string');
let iAmNumber = getValue<number>(100);
let iAmBoolean = getValue<boolean>(true);



// Genéricos en clases.
export class MyClass<T> {
    private data: T[] = [];
}