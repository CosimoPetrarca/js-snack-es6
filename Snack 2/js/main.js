'Use strict'

//creo un array di oggetti che rappresentano gli studenti (id,nome e voti)
const studenti = [
    {
        id: 213,
        nome: "Marco della Rovere",
        voti: 78
    },
    {
        id : 110,
        nome: "Paola Cortellessa",
        voti: 96
    },
    {
        id : 250,
        nome: "Andrea Mantegna",
        voti: 48
    },
    {
        id : 145,
        nome: "Gaia Borromini",
        voti: 74
    },
    {
        id : 196,
        nome: "Luigi Grimaldello",
        voti: 68
    },
    {
        id : 102,
        nome: "Piero della Francesca",
        voti: 50
    },
    {
        id : 120,
        nome: "Francesca da Polenta",
        voti: 84
    }
];

//creo una nuova lista con i nomi in maiuscolo (toUpperCase)
const nomiMaiuscolo = studenti.map((studente) => {
    return studente.nome.toUpperCase();
});

for (let i = 0; i < studenti.length; i++) {
    console.log(nomiMaiuscolo[i]);
}

//creo una lista con gli studenti con i voti superiori a 70
const studentiMeritevoli = studenti.filter((studente) => {
    return studente.voti > 70;
});

for (let i = 0; i < studentiMeritevoli.length; i++) {
    console.log(studentiMeritevoli[i]);
}

//creo una lista con gli studenti con i voti superiori a 70 ed id superiore a 120
const studentiCombo = studenti.filter((studente) => {
    return studente.voti > 70 && studente.id > 120;
});

for (let i = 0; i < studentiCombo.length; i++) {
    console.log(studentiCombo[i]);
    
}
