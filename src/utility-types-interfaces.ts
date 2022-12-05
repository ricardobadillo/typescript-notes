interface Persona {
    id: number | string;
    nombre: string;
    edad: number;
    fecha: Date;
};

// Omit.
// Ha omitido la propiedad id, fecha.
interface OmitPersonaDTO extends Omit<Persona, 'id' | 'fecha'> { 
    idPersona: number | string; 
};

// Pick.
// Solo tiene la propiedad idPersona, id.
interface PickPersonaDTO extends Pick<Persona, 'id'> {
    idPersona: number | string;
};

// Partial.
interface PartialPersonaDTO extends Partial<Persona> { };
// Todos los campos son ahora opcional.

// Required.
type personaRequired = Required<Persona>;
// Todos los campos son obligatorios.