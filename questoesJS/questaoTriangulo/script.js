let l1 = Number(prompt('Digite o valor de um lado do triângulo: ')), l2 = Number(prompt('Digite o valor de um lado do triângulo: ')), l3 = Number(prompt('Digite o valor de um lado do triângulo: '))
if (l1<(l2+l3) && l2<(l1+l3) && l3<(l2+l1)){
    if (l1==l2 && l2==l3){
        alert('O triangulo é equilatero')
    } else if(l1==l2 && l2!=l3 || l2==l3 && l3!=l1 || l1==l3 && l3!=l2){
        alert('O triângulo é isósceles')
    } else if (l1!=l2!=l3){
        alert('O triângulo é escaleno')
    }
} else {
    alert('Não é possível formar triângulo')
}
