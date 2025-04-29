let idades = [10], menores = [], adultos = [], maiores = []; 
s1 = 0; s2 = 0; s3 = 0;

for (let i = 0; i <= 9; i++) {
    idades[i] = Number(prompt("Digite uma idade"));

    if (idades[i] <= 18) {
        menores.push(idades[i]);
        s1 = s1 + idades[i];
    } else if (idades[i] > 18 && idades[i] <= 60) {
        adultos.push(idades[i]);
        s2 = s2 + idades[i];
    } else {
        maiores.push(idades[i]);
        s3 = s3 + idades[i];
    }
}

mediageral = s1 + s2 + s3 / 10;

alert(`As idades são ${menores} e a quantidade de menores é ${menores.length}`)
alert(`A média de menores é ${s1/menores.length}`)
alert(`As idades são ${adultos} e a quantidade adultos é ${adultos.length}`)
alert(`A média de adultos é ${s2/adultos.length}`)
alert(`As idades são ${maiores} e a quantidade de maiores é ${maiores.length}`)
alert(`A média de maiores é ${s3/maiores.length}`)
alert(`A média geral é ${mediageral}`)

