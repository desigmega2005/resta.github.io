function restOper(){
    const valor1 = document.getElementById('resta1').value;
    const valor2 = document.getElementById('resta2').value;

    if(valor1 == ''){
        valor1 = 0;
    }

    if(valor2 == ''){
        valor2 = 0;
    }

    const resultadoResta = parseInt(valor1) - parseInt(valor2);

    document.getElementById('restaRe').value = resultadoResta;
}

const buttonResta = document.getElementById('button');

buttonResta.addEventListener('click', restOper);