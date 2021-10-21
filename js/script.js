let km = prompt('Quanti km vuoi percorrere?');
let age = prompt('Inserisci la tua età');
let price = 0;
let errorMsg = '';
let codeSconto = '';

if(isNaN(km)){
  km = false;
  errorMsg = 'Inserire un numero di km valido';
}

if(isNaN(age)){
  age = false;
  errorMsg = 'Inserire un numero di anni valido';
}

if(age <= 20){
  codeSconto = prompt('inserisci il codice sconto SCONTO20 per avere un ulteriore 20% di sconto sul biglietto')
  price = (km * 0.21) - ((km * 0.21)*20)/100;
}

if(codeSconto !== 'SCONTO20'){
  codeSconto = false;
  errorMsg = 'Inserire un codice sconto valido';
}

console.log(errorMsg);
console.log(km);
console.log(age);


if(age < 18){
  price = (km * 0.21) - ((km * 0.21)*40)/100;
}

if(age > 20 && age <=65){
  price = km * 0.21;
}

if(age > 65){
  price = (km * 0.21) - ((km * 0.21)*40)/100;
}


console.log('Il prezzo è €',price.toFixed(2));

document.getElementById('price').innerHTML = price.toFixed(2);