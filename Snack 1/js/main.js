'Use strict'

// definisco una variabile con il nome del tavolo
const vip = 'Tavolo Vip';

// definisco un array con la lista degli invitati
const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// creo un array vuoto per contenere gli oggetti degli invitati
const oggettiInvitati = [];

// per ogni invitato creo un oggetto con i suoi attributi tramite il ciclo forEach
listaInvitati.forEach((star, index) => {
    const attributi = {
        Tavolo: vip,
        Invitato: star,
        Posto: index + 1
    };

    // pusho gli attributi nell'array vuoto
    oggettiInvitati.push(attributi);
});

// stampo in console
for (let i = 0; i < oggettiInvitati.length; i++) {
    console.log('Ospite:', oggettiInvitati[i].Invitato);
    console.log('Tavolo:', oggettiInvitati[i].Tavolo);
    console.log('Posto:', oggettiInvitati[i].Posto);
    console.log('*******');
}
