'use strict';

//let number = 5;
//const leftBorderWidth = 1;
//
////alert("vasea");
//
//const result = [];
//result[0] = prompt("are you here", "DDDfsfsdfsd");
//result[1] = prompt("are you here", "DDDfsfsdfsd");
//result[2] = prompt("are you here", "DDDfsfsdfsd");
//console.log(result);
//console.log(`tra la la ${result}`);

// const numberOfFilms = +prompt("How many films have you seen", "...");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt("film", ""),
//     b = prompt("nota", ""),
//     c = prompt("film", ""),
//     d = prompt("nota", "");

// personalMovieDB.movies.a = b;
// personalMovieDB["movies"][c] = d;

// let i = 0;
// while (i++ < 3) {
//     const e = prompt("film", ""),
//         f = prompt("nota", "");

//     if (e != null && e != '' && e.length < 4) {
//         personalMovieDB.movies[e] = f;
//     } else {
//         i--;
//         continue;
//     }

// }

// console.log(personalMovieDB);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you seen", "...");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you seen", "...");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB (param) {
    if(!param){
        console.log(personalMovieDB);
    }
} 

writeYourGeneres();
showMyDB(personalMovieDB.private);

function writeYourGeneres() {
    let i = 0;
    while(i++<3){
        const genre = prompt(`Your favorit music ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }   
}