interface Persona {
    edad:   number;
    fecha:  Date;
    id:     number | string;
    nombre: string;
};

// Omit utilizando interface: Ha omitido la propiedad fecha y nombre. Además, ha añadido la propiedad "extra".
interface OmitInterfacePersonaDTO extends Omit<Persona, 'fecha' | 'nombre'> { 
    extra: number | string; 
};

// Omit utilizando type: Ha omitido la propiedad fecha y nombre.
type OmitTypePersonaDTO = Omit<Persona, 'fecha' | 'nombre'>;

// Pick con interface: Solo tiene la propiedad extra y nombre.
interface PickInterfacePersonaDTO extends Pick<Persona, 'nombre'> {
    extra: number | string;
};

// Pick con type: Solo tiene la propiedad nombre.
type PickTypePersonaDTO = Pick<Persona, 'nombre'>;

// Partial.
type PartialPersonaDTO = Partial<Persona>;
// Todos los campos son ahora opcional.

// Required.
type RequiredPersonaDTO = Required<Persona>;
// Todos los campos son obligatorios.