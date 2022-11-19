type Quality = 'mala' | 'regular' | 'buena';

class Movie {
    constructor(
        public name: string,
        public age: number,
        public quality: Quality, 
        private score: number = 100 // Por defecto.
    ) {};

    public qualityMovie(movie: string, quality: Quality, score: number): string {
        return this.scoreMovie(movie, quality, score);
    };

    private scoreMovie(movie: string = 'La película por defecto', quality: Quality, score: number): string {
        if (quality === 'buena') {
            return `${movie} tiene un puntaje de ${score}`;
        } else if (quality === 'regular') {
            return `${movie} tiene un puntaje de ${score}`;
        } else {
            return `${movie} tiene un puntaje de ${score}`;
        };
    };
};

const movie = new Movie('Fight Club', 1999, 'regular', 99); 
console.log(movie.qualityMovie(movie.name, movie.quality, 99));

// movie.score ---> No se puede acceder al score.