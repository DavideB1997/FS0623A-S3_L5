/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*20)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name:"il tuo nome",
  surname: "il tuo cognome",
  age:"la tua età"
}

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["html","css","js"]

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

let lingua = "c#"

me.skills.push(lingua)
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  let randomNum= Math.floor(Math.random()*6)+1
  return randomNum;
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2){
  if(num1>num2){
    return num1
  }else{
    return num2
  }
}
console.log(whoIsBigger(16,4))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let frase = "Gas gas gas i'm gonna step on the gas"
function splitMe(stringa){
 fraseSplittata =stringa.split(" ")

 return fraseSplittata
}
console.log(splitMe(frase))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let stringa = "No doubt, I'm allowed to be a little pessimistic" 
function deleteOne(stringa,bool){
  if (bool){
    return stringaElaborata= stringa.slice(1)
  }
    return stringaElaborata= stringa.slice(0, -1)
}
console.log(deleteOne(stringa,false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let stringa5 = "uno 1 due 2 tre 3 quattro 4 cinque 5"

function onlyLetters(stringa){
  stringaElaborata = stringa.replace(/[0-9]/g, '')
  return stringaElaborata;
}
console.log(onlyLetters(stringa5))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let stringa6 = "questaemail@email.com"
function isThisAnEmail(stringa){
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  return regex.test(stringa)

}
console.log(isThisAnEmail(stringa6))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){
  let dataOdierna = new Date;
  const nomeGiorni = ["Domenica","Lunedi","Martedì","mercoledì","giovedi","venerdi","sabato"]
  giornoIndex = dataOdierna.getDay();
  giorno = nomeGiorni[giornoIndex]
  return giorno;
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num)
{
  let oggettoSum = {
    sum : 0,
    values: []
  }
  for(let i = 0; i<num;i++){
    numberoRandom = dice()
    oggettoSum.values.push(numberoRandom)
  }
  oggettoSum.sum = oggettoSum.values.reduce(function(a, b){
     return a + b;
  })
  return oggettoSum;
}
console.log(rollTheDices(10))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(anno,mese,giorno){
  let dataOdierna = new Date;
  let dataRichiesta = new Date(anno,(mese-1),giorno)

  differenza = dataOdierna - dataRichiesta

  differenza = parseInt(differenza/=86400000) 
  return differenza
}
console.log(howManyDays(1997,11,7))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(){
  let dataOdierna = new Date;
  let mioCompleanno = new Date (dataOdierna.getFullYear(),(11)-1,7);
  console.log(mioCompleanno)

  if(dataOdierna == mioCompleanno){
    console.log("auguri")
    return true
  }
  else{
    return false
  }
}
console.log(isTodayMyBirthday())

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let oggetto = {
  forma: "cubica",
  dimensioni: "il giusto",
  colore:"non ci piace",
  comportamento:"aggressivo"
}
function deleteProp(oggetto,stringa){
  delete oggetto[stringa];
  return oggetto;
}
console.log(deleteProp(oggetto,"forma"))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array){
  let newer = {
    Year: 0
  };
  array.forEach(movie => {
    if(movie.Year > newer.Year ){
      newer = movie;
    }
  });
  return newer;
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(array){
  return count = array.length; //+1 se non vuoi contare lo zero
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array){
  let arrayYears = [];
  array.forEach(movie => {
    arrayYears.push(movie.Year)
    })
  return arrayYears
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array){
  let arrayYears = [];
  array.forEach(movie => {
    if(movie.Year < 2000 ){
      arrayYears.push(movie)
    }
  });
  return arrayYears
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array){
  let totale = 0
  array.forEach(movie => {
    year = parseInt(movie.Year) 
    totale += year
  });
  return totale
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(array, stringa){
  let testoRicerca = stringa.toLowerCase()
  let filmTrovati = []
console.log(testoRicerca)

  array.forEach(movie => {
    titolo = movie.Title.toLowerCase()
    if(titolo.search(testoRicerca)>=0)
    {
      filmTrovati.push(movie)
    }
  });
   return filmTrovati
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(array, stringa){
  let testoRicerca = stringa.toLowerCase()

  let filmNonMatch = []
  let filmMatch = []
console.log(testoRicerca)

  array.forEach(movie => {
    titolo = movie.Title.toLowerCase()
    if(titolo.search(testoRicerca)>=0)
    {
      filmMatch.push(movie)
    }
    else{
      filmNonMatch.push(movie)
    }
  });

  const film = {
    filmMatch,
    filmNonMatch,
  }
   return film
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(array,index){
  console.log(array)
  delete array[index]
  cleanArray = array.flat()
  return cleanArray;
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let elemento20 = document.getElementById("container")

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

let elementi21= document.getElementsByTagName("td")


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTd(){
  const arrayTd = document.getElementsByTagName("td")
  console.log(arrayTd)
  
  for(let i=0; i < arrayTd.length;i++){
    console.log(arrayTd[i].textContent)
  }
}

stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function redBackground(){
  const arrayA = document.getElementsByTagName("a")
  console.log(arrayA)

  for(let i=0; i<arrayA.length;i++){
    arrayA[i].style.backgroundColor ="red";
  }
}

redBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addToMyList(id){
  myList = document.getElementById(id)
  elementoLi = document.createElement("li")
  myList.appendChild(elementoLi);
}
addToMyList("myList");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function removeToMyList(){
  arrayLi = document.querySelectorAll("#myList li")

  arrayLi.forEach(li => {
    li.parentNode.removeChild(li)
  });
}

removeToMyList();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassTr(){
  tr = document.getElementsByTagName("tr")


  for(let i=0; i<tr.length;i++){
    tr[i].classList.add("test")
  }
}

addClassTr();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(num){
  let contenitore = document.getElementById("halfTree");

  let asterischi=1;

  for(let i = 0;i <num;i++){
    let testo = document.createElement("p");
    for (let y = 0; y < asterischi; y++){
      testo.innerText = testo.innerText + "*";
      contenitore.appendChild(testo);
    } 
    asterischi++;
  }
}

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

function fullTree(num){
  let contenitore = document.getElementById("halfTree");
  let asterischi=1;

  for(let i = 0;i <num;i++){
    let testo = document.createElement("p");
    let spazio = "-";
    for(let i=0;i<(num*2)-asterischi;i++){
      testo.innerHTML = testo.innerHTML + spazio;
    }
    for (let y = 0; y < asterischi; y++){
      testo.innerHTML = testo.innerHTML + "*";
      contenitore.appendChild(testo);
    } 
    asterischi+=2;
  }
}
fullTree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num){
  let numeroPrimo = true;

  if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            numeroPrimo = false;
            break;
        }
    }
    if (numeroPrimo) {
      console.log(`${num} è un numero primo`);
  } else {
      console.log(`${num} non è un numero primo`);
  }
  }
}

isItPrime(11);

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]





console.log(removeIndex(movies,2))