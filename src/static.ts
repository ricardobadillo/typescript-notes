// Método que pertenece a la clase. No al objeto.

class Mathematic {
    static favoriteNumber: number = 3;
    static readonly PI: number = 3.14;

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}