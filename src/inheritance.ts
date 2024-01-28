// Protected es un privado pero que va a tener herencia.

export class Animal {
    constructor(protected nombre: string) { }

    public comunicar(onomatopeya: string): void {
        console.log(onomatopeya);
    }

    public mover(): void {
        console.log('Me muevo como un animal');
    }

    protected saludar(): void {
        console.log(`Hola, mi nombre es ${ this.nombre }`);
    }
}

// Con el método super se puede acceder a los métodos y propiedades de la clase padre.

export class Dog extends Animal {
    
    constructor(nombre: string, public owner: string) {
        super(nombre);
        this.owner = owner;
    }

    ladrar(onomatopeya: string): void {
        for (let index = 0; index < 3; index++) {
            this.comunicar(onomatopeya);
        }
    }

    mover(): void {
        console.log('Me muevo como un perro');
        super.mover(); // Dispara el método mover de la clase Animal.
    }
}

const perro = new Dog('Perrillo', 'Ricardo');

// perro.saludar(); // Error. No se puede acceder a un método protected desde fuera de la clase.
perro.ladrar('Guau');
perro.mover();
