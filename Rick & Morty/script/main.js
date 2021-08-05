const $container = $('#container');
let list = [];
$(document).ready(function(){
    getTop20()
    
})

function getTop20(){
    const char = 'https://rickandmortyapi.com/api/character';
    const charResponse = fetch(char).then(function (response){
        return response.json()
    }).then(function (data){
        for (let i=0; i<20; i++){
            list.push(data.results[i]);
        }
        displayTop20();  
    })
    
    
}

function displayTop20 () {
    list.forEach(function (element, i){
        let char =$(`<div  id="char">`)
        let img = $("<div>");
        let name =$("<div class='name'>");
        let like = $('<button>');
        let count = 0;
        img.append(`<img src="${list[i].image}">`);
        name.append(`<p>${list[i].name}</p>`);
        like.append('LIKE <span>♥</span>')
        char.append(img);
        char.append(name);
        char.append(like);
        $container.append(char)
        
        console.log('this'+name)
        name.on('click', function(){
            window.location.href = `character.html?name=${list[i].id}`})
        like.on('click', function(){
            like.attr('class','pressed');
            count ++;
            if (count == 1){
                like.html('1 LIKE <span>♥</span>')
            }
            else {
                like.html(`${count} LIKES <span>♥</span>`)
            }
        });     
        
    });
}
