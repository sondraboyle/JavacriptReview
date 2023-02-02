//Use Query Selector

//selecting by tag
let link = document.querySelector('a');
console.log(link);

//selecting by id
let title = document.querySelector('#title'); 
console.log(title);

//selecting by class
let paragraphContainer = document.querySelector('.paragraphs'); 
console.log(paragraphContainer);

//selecting by class and tag
let paragraph = document.querySelector('.paragraphs p');
console.log(paragraph);

//to find the CSS Selector, go into inspector and right click, copy --> CSS Selector

//Query Selector All
let links = document.querySelectorAll('a');
console.log(links);

//for each loop --> use for Node Lists
links.forEach(link => {
    console.log(link);
})

//GetElementsBy
let links2 = document.getElementsByTagName('a');
console.log(links2);


for(i=0;i<5; i++){
    // links2[i].innerText = `Hody Do`;
    links2[i].innerText += ", mate";  // add to the text

    //set an attribute
    links2[i].setAttribute('href', 'http://www.google.com');

    //Change className completely (overwrite the list)
   links2[i].className = "pinklinks";
    //add a class

    links2[i].classList.add("looped");

    //remove a class
   links2[i].classList.remove("pinklinks");
    
console.log(links2[i].getAttribute('class'));
   console.log(links2[i]);
}

//Change the HTML of an Element
let paraDiv = document.querySelector('div');
paraDiv.innerHTML += "<p>fooled ya</p>";


//click Events
title.onclick = function(){
    title.className = "big";
}
