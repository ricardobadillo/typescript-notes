export {};

type ID = number | string | object;



type onlyStringAndNumber = Exclude<number | string | object, object>;

let id: onlyStringAndNumber; // Es de tipo number o string;



type onlyObject = Extract<ID, object>;

let ID: onlyObject; // Es de tipo object.