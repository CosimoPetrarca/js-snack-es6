'Use strict'

//creo un array di oggetti bici da corsa con le proprietà nome e peso
const biciclette = [
    {
        nome: "Bianchi",
        peso: 7
    },
    {
        nome: "Bmx",
        peso: 6
    },
    {
        nome: "Atala",
        peso: 8
    },
    {
        nome: "Cinzia",
        peso: 12
    },
    {
        nome: "Nevi",
        peso: 10
    },
];

//ciclo e trovare la bici con il peso minore
let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}
console.log(biciLeggera);

//destructuring per estrarre le proprietà "nome" e "peso"
const {nome, peso} = biciLeggera;

//template literal
console.log(`La bici più leggera è ${nome} che pesa ${peso} kg.`);

