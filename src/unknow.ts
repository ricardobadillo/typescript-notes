let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {}; // Todos son válidos.

let unknowVar: unknown; // Ok.
unknowVar = true; // Ok.
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {}; // El resto no son son válidos.


if (typeof unknowVar === 'string') {
    unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
    let isNew: boolean = unknowVar;
}