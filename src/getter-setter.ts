class Game {
    constructor(
        private _name: string,
        private _genre: string,
        private _age: number
    ) {};

    get nameGame(): string {
        return this._name;
    }

    set changeNameGame(nameGame: string) {
        this._name = nameGame;
    }
}

const game = new Game('Dark Souls', 'RPG', 2011);
console.log(game.nameGame); // ---> Se ve como una propiedad, pero es un método.

game.changeNameGame = 'Outlast'; // Setter.
console.log(game.nameGame); // ---> Output: Outlast.
