export {};

type ID = number | string | object;

// Excluye el tipado de Object.
type OnlyStringAndNumber = Exclude<number | string | object, object>;

let id: OnlyStringAndNumber; // Es de tipo number o string;

// Extrae un tipo del type ID.
type OnlyObject = Extract<ID, object>;

let otherId: OnlyObject; // Es de tipo object.

// Record.
type Style = Record<string, number | string>;