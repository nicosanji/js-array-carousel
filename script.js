// DICHIARO/CREO array "items" = immagini
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// DICHIARO/CREO array "title" = titoli
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

// DICHIARO/CREO array "text" = paragrafi/sottotitoli
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



// DICHIARO & COLLEGO variabile al "contenitore HTML" dell'immagine grande 
const myBigImg = document.querySelector(".my-big-img");
// mostra in console
console.log(myBigImg);

// DICHIARO & COLLEGO variabile al "contenitore HTML" dei testi dell'immagine grande 
const myBigImgTitle = document.querySelector(".my-big-img-title");
// mostra in console
console.log(myBigImgTitle);

// DICHIARO & COLLEGO variabile al "contenitore HTML" della lista delle immagini piccole 
const myListImg = document.querySelector(".my-list-img");
// mostra in console
console.log(myListImg);



// DICHIARO & CREO variabile iniziale a 0=(1° elemento ordine array) che indicherà "dove sono ora" -> (poi cambierà)
let nowSelected = 0;


// DICHIARO & CREO variabile "vuota" per il ciclo
let i = "";

// CREO IL CICLO FOR per inserire/scorrere gli array per la colonna di sinistra con img + testo nell'HTML 
for (let i = 0; i < items.length; i++) {
     
    const nowImg = items[i];

    let initial = "";

    if (i === nowSelected) {

        initial = "active";

    }
    // CREO la variabile chè è anche il tag img ora selezionato dall'array che è stato "ciclato"
    const imgSelected = `<img class="${initial}" src="${nowImg}" alt="">`;
    // aggiungo ad HTML 
    myBigImg.innerHTML += imgSelected;

    // CREO la variabile chè è anche il testo ora selezionato dall'array che è stato "ciclato"
    const textSelected = `<div class="${initial} container-text"><h4>${title[i]}</h4>${text[i]}</div>`;
    // aggiungo ad HTML
    document.querySelector(".my-big-img-title").innerHTML += textSelected;
}



// DICHIARO & COLLEGO variabile al "HTML" della freccia in alto (up)
const iconBoxUp = document.querySelector(".icon-box-up");
// DICHIARO & COLLEGO variabile al "HTML" della freccia in basso (down)
const iconBoxDown = document.querySelector(".icon-box-down");










