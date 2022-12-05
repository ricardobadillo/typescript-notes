type Side = 'Backend' | 'Frontend';

export interface ProgrammingLanguage {
    name: string;
    frameworks: string[];
    side: Side;
    greeting(name: string): string;
};

class JavaScript implements ProgrammingLanguage {
    constructor(public name: string, public side: Side, public frameworks: string[]) { };

    greeting(name: string): string {
        return `Hola, estás usando ${name}`;
    }
}

const javascript = new JavaScript('JavaScript', 'Frontend', ['Angular', 'React']);