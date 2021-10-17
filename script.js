/* --- DICHIARAZIONE 3 ARRAY --- */

// ARRAY 1 IMMAGINI (1-5)
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// ARRAY 2 TITOLI (1-5)
const title = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise"
];

// ARRAY 3 SOTTOTITOLI (1-5)
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];


// recupero & dichiaro da html -> Container lista immagini piccole dx
const imgsListBox = document.querySelector(".imgs-list-box");

// CICLO per inserire tutti e 3 gli arrays con gli indici per ogni elemento
for (let i = 0; i < items.length; i++) {
    // recupero & dichiaro da html -> Immagini piccole nel container dx
    const imgListItem = `<div class="img-list-item ${i === 0 ? "active" : ""}"><img src=${items[i]} alt=${title[i]}-img></img></div>`;
    // inserisco nel html
    imgsListBox.innerHTML += imgListItem;
}


// recupero & dichiaro da html -> Freccia in su
const iconTop = `<div class="icons icon-top"><i class="fas fa-chevron-up"></i></div>`;
// inserisco nel html
imgsListBox.innerHTML += iconTop;


// recupero & dichiaro da html -> Freccia in giù
const iconBottom = `<div class="icons icon-bottom"><i class="fas fa-chevron-down"></i></div>`;
// inserisco nel html
imgsListBox.innerHTML += iconBottom;


// recupero & dichiaro da html -> Classe Freccia in su 
const iconTopClass = document.querySelector(".icon-top");
// recupero & dichiaro da html -> Classe Freccia in giù 
const iconBottomClass = document.querySelector(".icon-bottom");

// recupero & dichiaro da html -> Immagini piccole nel container dx
const imgListItemClass = document.querySelectorAll(".img-list-item");

// recupero & dichiaro da html -> Immagine grande
const imgBigLeft = document.getElementById("img-big-left");
// recupero & dichiaro da html -> Titolo
let textBoxTitle = document.querySelector(".text-box-title");
// recupero & dichiaro da html -> Sottotitolo
let textBoxSubtitle = document.querySelector(".text-box-subtitle");

// dichiaro un indice a zero (elementi correnti)
let current = 0;


/* --- DICHIARAZIONE VARIABILI LEGATE ALL'INDICE da usare al click --- */

// "collego" l'immagine grande al suo "indice corrente" dal suo attributo src
imgBigLeft.src = items[current];
// "collego" il titolo al suo "indice corrente"
textBoxTitle.innerHTML = title[current];
// "collego" il sottotitolo al suo "indice corrente"
textBoxSubtitle.innerHTML = text[current];


// FUNZIONE AL CLICK: freccia in su
iconTopClass.addEventListener("click", function () {

    // rimuovi la classe active
    imgListItemClass[current].classList.remove("active");

    if (current > 0) current--;
    else current = 4;

    // aggiungi la classe active
    imgListItemClass[current].classList.add("active");

    // variabili legate all'indice
    imgBigLeft.src = items[current];
    textBoxTitle.innerHTML = title[current];
    textBoxSubtitle.innerHTML = text[current];

    // mostra in console indice corrente dell'immagine e titolo
    console.log(`l'immagine corrente è la ${current}`);
    console.log(`l'utente è in ${title[current]}`);

});


// FUNZIONE AL CLICK: freccia in giù
iconBottomClass.addEventListener("click", function () {

    // rimuovi la classe active
    imgListItemClass[current].classList.remove("active");

    if (current < 4) current++;
    else current = 0;

    // aggiungi la classe active
    imgListItemClass[current].classList.add("active");

    // variabili legate all'indice
    imgBigLeft.src = items[current];
    textBoxTitle.innerHTML = title[current];
    textBoxSubtitle.innerHTML = text[current];

    // mostra in console indice corrente dell'immagine e titolo
    console.log(`l'immagine corrente è la ${current}`);
    console.log(`l'utente è in ${title[current]}`);

});