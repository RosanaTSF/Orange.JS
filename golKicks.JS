//Lista nomes. pop e shift.

const players = [];

players.push('Aninha');
players.push('13');
players.push('Katatau');
players.push('Barth');

players[4] = 'Bolinha';

console.log(players);

console.log(players.pop());

console.log(players.shift());

// lista dinâmica, uso do for e length.

const golKicks = [];

golKicks.push(0);
golKicks.push(7);
golKicks.push(3);
golKicks.push(4);
golKicks.push(9);

console.log(golKicks.length);

for (let i = 0; i < 10; i++) {


}

// listando letras.

const name = 'Penélope & Rosana'

for (let i = 0; i < name.length; i++) {
    const letra = name[i]
    console.log(letra);

}

//Apenas n. pares.

const pairs = [10, 5, 8, 2, 12, 4, 9];

for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    if (pair % 2 === 0) {
        console.log(pair);
    }


}


