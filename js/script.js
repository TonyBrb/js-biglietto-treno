const km = prompt('Quanti km vuoi percorrere?');
const age = prompt('Inserisci la tua età');
let price = 0;

console.log(km);
console.log(age);


if(age < 18){
  price = (km * 0.21) - ((km * 0.21)*20)/100;
}

if(age > 65){
  price = (km * 0.21) - ((km * 0.21)*40)/100;
}


console.log('Il prezzo è €',price.toFixed(2));

document.getElementById('price').innerHTML = price.toFixed(2);