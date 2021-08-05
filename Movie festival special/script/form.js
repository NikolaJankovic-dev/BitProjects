const $title = document.querySelector("#title");
const $duration = document.querySelector("#duration");
const $genre = document.querySelector("#genre");
const $createMovieBtn = $("#createMovie");
const $createdMovies = $("#createdMovies");
const $date = document.querySelector("#date");
const $createProgramBtn = $("#createProgram");
const $createdPrograms = $("#createdPrograms");
const $selectMovie = document.querySelector("#selectMovie");
const $selectProgram = document.querySelector("#selectProgram");
const $addMovieBtn = $("#addMovie");
const $errorTitle = document.querySelector("#errorTitle");
const $errorDuration = document.querySelector("#errorDuration");
const $errorGenre = document.querySelector("#errorGenre");
const $errorDate = document.querySelector("#errorDate");
const $errorMovie = document.querySelector("#errorMovie");
const $errorProgram = document.querySelector("#errorProgram");
const movieArray = [];
const programArray = [];

import { Movie } from "/script/entities.js";
import { Program } from "/script/entities.js";

$createMovieBtn.on("click", function () {
  validateMovie();
});
$createProgramBtn.on("click", validateProgram);
$addMovieBtn.on("click", validateSelect);
function validateMovie() {
  if ($title.value == "") {
    $errorTitle.innerHTML = "Title is requried";
  } else if ($title.value !== "") {
    $errorTitle.innerHTML = "";
    if ($duration.value == "") {
      $errorDuration.innerHTML = "Duration is requried";
    } else if ($duration.value < 1) {
      $errorDuration.innerHTML = "Duration must be longer";
    } else if ($duration.value != "" && $duration.value > 0) {
      $errorDuration.innerHTML = "";
      if ($genre.value == "-") {
        $errorGenre.innerHTML = "Genre is requried";
      } else if ($genre.value != "-") {
        $errorGenre.innerHTML = "";
        createMovie();
      }
    }
  }
}
function validateProgram() {
  if ($date.value == "") {
    $errorDate.innerHTML = "Date is required!";
  } else {
    $errorDate.innerHTML = "";
    createProgram();
  }
}

function validateSelect() {
  if ($selectMovie.value == "-") {
    $errorMovie.innerHTML = "Select a movie";
  } else {
    $errorMovie.innerHTML = "";
    if ($selectProgram.value == "-") {
      $errorProgram.innerHTML = "Select a program";
    } else {
      $errorProgram.innerHTML = "";
      addMovieToProgram();
      update();
    }
  }
}
function createMovie() {
  let movie = new Movie($title.value, $duration.value, $genre.value);
  movieArray.push(movie);
  $createdMovies.append(`<li>${movie.getMovieData}</li>`);

  let $movieOption = document.createElement("option");
  $movieOption.append(movie.getMovieData);
  $selectMovie.append($movieOption);

  $title.value = "";
  $duration.value = "";
  $genre.value = "-";
  

}

function createProgram() {
  var program = new Program($date.value);
  programArray.push(program);
  $createdPrograms.append(`<li>${program.getProgramData}</li>`);
  let $programOption = document.createElement("option");
  $programOption.append(program.getProgramData);
  $selectProgram.append($programOption);
}

function addMovieToProgram() {
  let movie = $selectMovie.value;
  let program = $selectProgram.value;

  for (let i = 0; i < movieArray.length; i++) {
    if (movieArray[i].getMovieData == movie) {
      movie = movieArray[i];
    }
  }

  for (let i = 0; i < programArray.length; i++) {
    if (programArray[i].getProgramData == program) {
      program = programArray[i];
    }
  }

  program.listOfMovies.push(movie);
}

function update() {
  let list = "";
  let option = "<option>-</option>";

  for (let i = 0; i < programArray.length; i++) {
    list += `<li>${programArray[i].getProgramData}</li>`;
    option += `<option>${programArray[i].getProgramData}</option>`;
  }
  $createdPrograms.html(list);
  $selectProgram.innerHTML = option;
}


