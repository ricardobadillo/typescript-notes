type ID = string | number;

// Uso con variables.
let ci: ID = 24252180;      // Ok.
let CI: ID = '24252180';    // Ok. 

// Uso en función: Función tipada con el Type definido.
function identificador(id: ID) : ID {
    return id;
}