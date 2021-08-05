import { singleCharacterCommunicator } from './SingleCharacterCommunicator.js'; 

let $charName = $('.charName')
let $imgRes = $('.imgRes')
let $textRes = $('.textRes')
let $about = $('.about')
let $title = $('title')


$(document).ready(function (){
    const urlPArams = new URLSearchParams(window.location.search);
    const myParams = urlPArams.get("name")
    console.log(myParams)
    getChar(myParams);
    
});

const displayCHaracter = (data) => {
    $charName.html(data.name);
    $about.append(` ${data.name}:`)
    $title.html(data.name)
        $imgRes.append(`<img src="${data.image}">`)
        $textRes.append(`<li>Species: ${data.species}</li>
        <li>Gender: ${data.gender}</li>
        <li>Currnet location: ${data.location.name}</li>
        <li>From: ${data.origin.name}</li>
        <li>Status: ${data.status}`)
        console.log(data)
};

function getChar(charName){
   singleCharacterCommunicator.fetchCharacter(charName).then(function (data){
        displayCHaracter(data);
    })
}
