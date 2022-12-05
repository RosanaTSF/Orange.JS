function computeImc(yourWeght, yourHeight) {
    return yourWeght / Math.pow(yourHeight, 2);
}

function classifyImc(imc) {

    if(imc < 18.5) {
        return 'Abaixo do peso';
    }  else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

(function () {
    const yourWeght = 60;
    const yourHeight = 1.60;

    const imc = computeImc(yourWeght, yourHeight);
    console.log(classifyImc(imc));

}());

