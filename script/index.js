let weight = document.getElementById('input-weight');
let height = document.getElementById('input-height');

const button = document.querySelector('button');
button.addEventListener('click', function(){
    showBodyMassIndexBand(calculateBodyMassIndex(weight.value, height.value));
});

function calculateBodyMassIndex(weight, height) {
    let heightSquared = (parseInt(height) / 100) * (parseInt(height) / 100);
    return (weight / heightSquared).toFixed(2);
}

function showBodyMassIndexBand(imc){
    if(imc <= 18.5){
        return alert(`Seu IMC é: ${imc} - Magreza`);
    }
    if(imc > 18.5 && imc <= 24.9){
        return alert(`Seu IMC é: ${imc} - Normal`);
    }

    if(imc > 24.9 && imc <= 29.9){
        return alert(`Seu IMC é: ${imc} - Sobrepeso`);
    }

    if(imc > 29.9 && imc <= 39.9){
        return alert(`Seu IMC é: ${imc} - Obesidade`);
    }

    return alert(`Seu IMC é: ${imc} - Obesidade Grave`);
}