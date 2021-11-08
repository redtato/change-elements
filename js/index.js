// CONTAINER 
let cont1 = document.querySelector('.cont1');


// CREATED ELEMENTS AND THEIR CLASS
// main elements
let cont1_1 = document.createElement('div');
cont1_1.classList.add('cont1_1');

let cont1_2 = document.createElement('div');
cont1_2.classList.add('cont1_2');

let h1 = document.createElement('h1');
h1.classList.add('h1');

// secundary elements
let h2 = document.createElement('h2');
h2.classList.add('h2');

let cont1_1N = document.createElement('div');
cont1_1N.classList.add('cont1_1N');

let cont1_2N = document.createElement('div');
cont1_2N.classList.add('cont1_2N');

// content
let txt = document.createTextNode(`hey, I'm a title`);



// DEFAULT WAY
cont1.appendChild(cont1_1);
cont1.appendChild(cont1_2);
cont1_1.appendChild(h1);
h1.appendChild(txt);




function op(n){
    // RELATIVE VARIABLES
    /*
        so I will get the value of the element before it is changed
    */
    let CFECh = cont1.firstElementChild
    let CFFECh = cont1.firstElementChild.firstElementChild
    

    // FUNCTIONS
    // change parent
    if(n === 'p'){
        if(CFECh === cont1_1){
            cont1.replaceChild(cont1_1N, cont1_1);
            cont1_1N.appendChild(CFFECh);
            CFFECh.appendChild(txt);
        }
        else if(CFECh === cont1_1N){
            cont1.replaceChild(cont1_1, cont1_1N);
            cont1_1.appendChild(CFFECh);
            CFFECh.appendChild(txt);
        }
    }
    
    // change child
    else if(n === 'c'){
        if(CFFECh === h1){
            CFECh.replaceChild(h2, h1); 
            cont1.firstElementChild.firstElementChild.appendChild(txt);
        }
        else if(CFFECh === h2){
            CFECh.replaceChild(h1, h2); 
            cont1.firstElementChild.firstElementChild.appendChild(txt);
        }
    }

    // change sibling
    else if(n === 's'){
        if(CFECh.nextElementSibling === cont1_2){
            cont1.replaceChild(cont1_2N, cont1_2);
        }
        else if(CFECh.nextElementSibling === cont1_2N){
            cont1.replaceChild(cont1_2, cont1_2N);
        }
    }
}

// see on console
function cons(){
    console.log(cont1);
}