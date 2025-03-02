// EJERCICIO DE LETRAS a,s,d

let caja1 = document.getElementById('key')
let caja2 = document.getElementById('key2')

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {
        caja1.style.backgroundColor= 'pink'
    } 
    else if (event.key === 's') {
        caja1.style.backgroundColor= 'orange'
    }
    else if (event.key === 'd') {
        caja1.style.backgroundColor= 'skyblue'
    }
});


// EJERCICIO DE LETRAS q,w,e

document.addEventListener('keydown', function (event) {
    caja2.classList.remove('inactive');
    if (event.key === 'q') {
        caja2.style.backgroundColor= 'purple'
    } 
    else if (event.key === 'w') {
        caja2.style.backgroundColor= 'grey'
    }
    else if (event.key === 'e') {
        caja2.style.backgroundColor= 'brown'
    }
});