let anyText: any;

anyText = 'Ricardo';

// Castear.
const castingText = (anyText as string).length;

// Otra forma de castear. (Usando los genéricos).
const otherCastingText = (<string>anyText).length;