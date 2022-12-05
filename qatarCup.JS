class qatarCup {
}

function compareqatarCup(p1, p2) {
    if (p1.height > p2.height) {
        console.log(`${p1.name} It's higher(a) than ${p2.name}`);
    } else if (p2.height > p1.height) {
        console.log(`${p2.name} It's higher(a) than ${p1.name}`);
    } else {
        console.log(`${p1.name} and ${p2.name} are the same height`);
    }
}

const korea = new qatarCup('Son Heung-min', 1.83);
const japan = new qatarCup('Shogo Taniguchi', 1.80);
const germany = new qatarCup('Kevin Trapp', 1.90);
const australian = new qatarCup('Jackson Irvine', 1.90);
const brazil = new qatarCup('Alisson Becker', 2.00);
const switzerland = new qatarCup('Eray Comert', 1.71);

compareqatarCup(korea, japan);
