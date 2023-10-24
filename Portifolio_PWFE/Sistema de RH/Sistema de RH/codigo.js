function mudar(caminho){
    document.getElementById("logo").src=caminho
}

function atualizarDataHora() {
    // Crie um objeto de data
    const dataHora = new Date();

    // Obtenha os componentes de data e hora
    const data = dataHora.toLocaleDateString();
    const hora = dataHora.toLocaleTimeString();

    // Atualize o conteúdo do parágrafo com a data e hora
    document.getElementById('data').textContent = `${data} - ${hora}`;
}

// Chame a função inicialmente e, em seguida, a cada segundo para manter a data e hora atualizadas
atualizarDataHora();
setInterval(atualizarDataHora, 1000);

var salario = document.getElementById("salario")
var quant_hr_normais = document.getElementById("quant_hr_normais")
var quant_hr_fds = document.getElementById("quant_hr_fds")
var res = docuemnt.getElementById("res")

function calcular() {
    var valorhora = Number(salario.value) / 200
    var horaextra = valorhora * Number(quant_hr_normais.value) / 200
    var horaextra = valorhora * Number(quant_hr_normais.value)
    var horafds = valorhora * 1.5 * Number(quant_hr_fds.value)
    res.innerHTML = 
    `<p> valor da hora de trabalho: R$ ${valorhora.toFixed(2)}</p>
    <p>Quantidade de horas extras normais: ${quant_hr_normais.value}
    horas - Valor total: R$ ${horaextra.toFixed(2)}</p>
    <p>Quantidade de horas extras de final de semana: ${quant_hr_fds.value} horas - Valor total: R$ ${horafds.toFixed(2)}</p>
    <p>Valores totais a receber R$: ${(horaextra + horafds).toFixed(2)}` 
}

/*
02 - AUMENTO DE SALÁRIO
Crie um programa para atender a necessidade abaixo:
O gestor deverá informar o salário de um funcionário e o software calcular o valor do aumento conforme regra abaixo:

Salários até R$ 1.200,00: aumento de 16%.
Salários de R$ 1.200,01 até R$ 2.100,00: aumento de 13%.
Salários de R$ 2.100,01 até R$ 3.000,00: aumento de 10%.
Salários acima de R$ 3.000,00: aumento de 5%.

Exiba o novo salário após o aumento.
*/
var salario = document.getElementById("salario")
var res = document.getElementById("res")

function calcular() {
   
    if (salario.value < 1200) {
        var aumento = Number(salario.value) * 0.16
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 2100) {
        var aumento = Number(salario.value) * 0.13
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else if (salario.value <= 3000) {
        var aumento = Number(salario.value) * 0.10
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    } else {
        var aumento = Number(salario.value) * 0.05
        var novosalario = Number(salario.value) + aumento
        res.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
}