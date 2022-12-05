// Genéricos en funciones.

function getValue<T>(value: T) {
    return value;
}

// getValue<number>(3).toString();  ---> En caso de que fuese number.
// getValue<string>('5').toLowerCase(); ---> En caso de que fuese string.



// Genéricos en clases.

export class MyClass<T> {
    private data: T[] = [];
}