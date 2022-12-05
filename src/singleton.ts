// Singleton: Constructor privado.

class MyService {

    static instance: MyService | null = null;
    
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    static create(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }

        return MyService.instance;
    }
}

const miPrimerServicio = MyService.create('Primer servicio');
const miSegundoServicio = MyService.create('Segundo servicio');

// Solo hay una instancia del servicio.