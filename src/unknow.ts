// Unknown es similar a any. 
// Es la forma en la que TypeScript sugiere que evitemos trabajar constantemente con any. 
// Proporciona flexibilidad sin apagar totalmente el análisis de código.

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {}; // Todos son válidos.

let anyVar1: unknown = anyVar;  // Ok.
let anyVar2: boolean = anyVar;  // Ok.
let anyVar3: number = anyVar;   // Ok.
let anyVar4: string = anyVar;   // Ok.
let anyVar5: object = anyVar;   // Ok.
let anyVar6: any[] = anyVar;    // Ok.
let anyVar7: Function = anyVar; // Ok.

let unknownVar: unknown; // Ok.

let unknowVar1: unknown = unknownVar; // Ok.
let unknowVar2: any = unknownVar;
// let unknowVar3: boolean = unknownVar;  Error.
// let unknowVar4: number = unknownVar;   Error.
// let unknowVar5: string = unknownVar;   Error.
// let unknowVar6: object = unknownVar;   Error.
// let unknowVar7: any[] = unknownVar;    Error.
// let unknowVar8: Function = unknownVar; Error.

if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
    console.log(unknownVar);
}

if (typeof unknownVar === 'boolean') {
    let isNew: boolean = unknownVar;
    console.log(isNew);
}