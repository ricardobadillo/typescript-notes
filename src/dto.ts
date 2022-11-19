interface Persona {
    id: number | string;
    nombre: string;
    edad: number;
    fecha: Date;
};

// Types Pick - Omit.

type OnlyNombrePersona = Pick<Persona, 'nombre'>;

// Solo tiene la propiedad "nombre".
const miNombre: OnlyNombrePersona = { nombre: "Ricardo" };



type OmitDatePersona = Omit<Persona, "fecha">;

// Ha omitido la propiedad "fecha".
const personaSinFecha: OmitDatePersona = { id: 1, nombre: "Ricardo", edad: 28 };



// Interfaces Pick - Omit.

interface PickPersonaDTO extends Pick<Persona, 'nombre'> { miNombre: string };

interface OmitPersonaDTO extends Omit<Persona, 'id' | 'fecha'> { idPersona: number | string; };



// Partial convierte todas las propiedades de Persona en opcionales.
function showPersona(persona: Partial<Persona>) {
    return persona;
};

const ricardo = showPersona({ id: 1, nombre: 'Ricardo' }); // { id: 1, nombre: "Ricardo" };

