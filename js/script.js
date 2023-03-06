/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*/

/*

->>select per le difficolta 
?difficolta 1  => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
?:difficolta 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
?:difficolta 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
-->generare una griglia al clicc
    ->ogni cella ha un numero progressivo (da 1 a 100)
        ->10 righe 10 casselle 
->al clicca di una cassella cambia colore in azzurro 
->emette un messaggio in consol del numero

*/

let difficultyEL = document.getElementById('difficulty');
let startBtnEl = document.getElementById('start-btn');
let containerSquareEl = document.getElementById('container-square');




startBtnEl.addEventListener('click',function(){
    
    removeClass();

    if(difficultyEL.value == 1){

        for(let i = 1; i <= 100;i++){
            
            createSquareAndColor(containerSquareEl,i);

            containerSquareEl.classList.add('container-square-f');
            
        }

    }else if(difficultyEL.value == 2){

        for(let i = 1; i <= 81;i++){
            
            createSquareAndColor(containerSquareEl,i)

            containerSquareEl.classList.add('container-square-n')

        }

    }else{

        for(let i = 1; i <= 49 ;i++){
            
            createSquareAndColor(containerSquareEl,i)

            containerSquareEl.classList.add('container-square-d')
            
        }

    }

    
})



//////////function/////////

function removeClass(){
    
    containerSquareEl.innerHTML='';

    containerSquareEl.classList.remove('container-square-f','container-square-n','container-square-d')
    
}


//function che crea i quadrati e assegna classColor
function createSquareAndColor(container,i){

    let newSquare = document.createElement('div')

    newSquare.classList.add('square')

    container.append(newSquare)
    
    newSquare.textContent=i
    
    newSquare.addEventListener('click',function(){
       
        newSquare.classList.add('green')
        
        console.log(i)

    } )
}