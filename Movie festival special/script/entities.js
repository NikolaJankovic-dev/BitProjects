class Genre {
    constructor (genre){
        this.genre = genre;
    }
    get getGenreData () {
        let shorterGenre = `${this.genre[0]}${this.genre[this.genre.length-1]}`;
        shorterGenre = shorterGenre.toUpperCase();
        return shorterGenre;
    }
}

export class Movie extends Genre {
    constructor (title, duration, genre){
        super(genre);
        this.title = title;
        this.duration = duration;
        
    }
    
    get getMovieData () {
        return `${this.title}, ${this.duration} min, ${this.getGenreData}`;
    }
}

export class Program {
    constructor (date){
        this.date = new Date(date);
        this.listOfMovies = [];
    }
    get getProgramDuration () {
        let totalDuration = 0;
        this.listOfMovies.forEach(element => {
            totalDuration += parseFloat(element.duration);
        })
        return totalDuration;
    }
    get getNormalDate () {
        
        return `${this.date.getDate()}.${this.date.getMonth()+1}.${this.date.getFullYear()}.`;
    }
    get getProgramData () {
        if (this.listOfMovies.length == 0) {
            return this.getNormalDate
        }
        else if (this.listOfMovies.length == 1){
            return `${this.getNormalDate}, ${this.listOfMovies.length} movie, duration: ${this.getProgramDuration} min`;
        }
        else{
        
            return `${this.getNormalDate}, ${this.listOfMovies.length} movies, duration: ${this.getProgramDuration} min`;
        }
    }
   
}

