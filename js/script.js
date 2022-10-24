const eleSquares = document.querySelector('.squares');

console.log('Numeri da 1 a 100');
for (let i = 1; i <= 100; i++) { 
	
    if (i % 3 == 0 && i % 5 != 0){
        eleSquares.innerHTML += `<div class="sq3">${'fizz'}</div>`;
        console.log('fizz');
    } else if (i % 5 == 0 && i % 3 != 0){
        eleSquares.innerHTML += `<div class="sq5">${'buzz'}</div>`;
        console.log('buzz');
    } else if (i % 5 == 0 && i % 3 == 0) {
        eleSquares.innerHTML += `<div class="sq15">${'fizzbuzz'}</div>`;
        console.log('fizzbuzz');
    }
    else {
        console.log(i);
        eleSquares.innerHTML += `<div class="sq">${i}</div>`;
    }
    
}

