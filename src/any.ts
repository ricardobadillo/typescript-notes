let anyText: any;

anyText = 'Ricardo';

// Castear.
const castingText = (anyText as string).length;

// Otra forma de castear. (Genéricos).
const otherCastingText = (<string>anyText).length;