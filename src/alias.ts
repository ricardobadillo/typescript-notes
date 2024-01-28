// Type.
type Id = string | number;

// Uso con variables.
let ci: Id = 24252180;      // Ok.
let CI: Id = '24252180';    // Ok. 

// Uso en función: Función tipada con el Type definido.
function identificador(id: Id): Id {
    return id;
}