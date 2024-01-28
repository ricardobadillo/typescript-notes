type Quality = 'mala' | 'regular' | 'buena';

class Movie {
    constructor(
        public name: string,
        public year: number,
        public quality: Quality, 
        private score: number = 10 // Por defecto.
    ) {}

    private scoreMovie(movie: string = 'La película por defecto', quality: Quality, score: number): string {
        if (quality === 'buena') {
            return `${ movie } del año ${ this.year } tiene un puntaje de ${ score }`;
        } else if (quality === 'regular') {
            return `${ movie } del año ${ this.year } tiene un puntaje de ${ score }`;
        } else {
            return `${ movie } del año ${ this.year } tiene un puntaje de ${ score }`;
        }
    }

    public qualityMovie(movie: string, quality: Quality, score: number): string {
        return this.scoreMovie(movie, quality, score);
    }
}

const movie = new Movie('Fight Club', 1999, 'regular', 100);
console.log(movie.qualityMovie(movie.name, movie.quality, 95));

// movie.score ---> No se puede acceder al score.