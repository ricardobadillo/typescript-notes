interface Persona {
    id: number | string;
    nombre: string;
    edad: number;
    fecha: Date;
};

// type CreatePersonaDTO = Omit<Persona, 'id' | 'fecha'>;
type Nombre = Pick<Persona, 'nombre'>;

interface createPersonaDTO extends Omit<Persona, 'id' | 'fecha'> {
    idPersona: number | string;
};