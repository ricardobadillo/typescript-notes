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
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}



export class Dog extends Animal {
    
    constructor(nombre: string, public owner: string) {
        super(nombre);
        this.owner = owner;
    }

    ladrar(onomatopeya: string): void {
        for (let index = 0; index < 4; index++) {
            this.comunicar(onomatopeya);
        }
    }

    mover(): void {
        console.log('Me muevo como un perro');
        super.mover(); // Dispara el método mover de la clase Animal.
    }
}

const perro = new Dog('Perrillo', 'Ricardo');

perro.ladrar('Guau');
perro.mover();
