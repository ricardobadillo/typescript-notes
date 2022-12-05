// Unknown es similar a any. Es la forma en la que TypeScript sugiere que evitemos trabajar constantemente con any. 
// Proporciona flexibilidad sin apagar totalmente el análisis de código.

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {}; // Todos son válidos.

let value: unknown; // Ok.

let unknowVar1: unknown = value; // Ok.
let unknowVar2: any = value;
// let unknowVar3: boolean = value;  Error.
// let unknowVar4: number = value;  Error.
// let unknowVar5: string = value;  Error.
// let unknowVar6: object = value;  Error.
// let unknowVar7: any[] = value;   Error.
// let unknowVar8: Function = value;    Error.

if (typeof value === 'string') {
    value.toUpperCase();
    console.log(value);
}

if (typeof value === 'boolean') {
    let isNew: boolean = value;
    console.log(isNew);
}