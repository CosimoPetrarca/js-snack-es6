'Use strict'

//creo un array di oggetti di squadre di calcio
const squadre = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0
    },
    {
        nome: "Atalanta",
        punti: 0,
        falli: 0
    }
];

//genero numeri randomici per le proprietà punti e falli
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 90);
    squadre[i].falli = Math.floor(Math.random() * 200);
}
console.log(squadre);
