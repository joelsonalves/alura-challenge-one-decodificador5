
const textoEntrada = document.querySelector('#texto-entrada');
const textoSaida = document.querySelector('#texto-saida');
const botaoCriptografar = document.querySelector('#criptografar');
const botaoDescriptografar = document.querySelector('#descriptografar');
const botaoCopiar = document.querySelector('#copiar');

const mapaCaracteres = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
]

const ocultarBotaoCopiar = () => {
    botaoCopiar.style.display = 'none';
};

const mostrarBotaoCopiar = () => {
    botaoCopiar.style.display = '';
};

const criptografar = (texto) => {
    mapaCaracteres.forEach((caracter) => {
        texto = texto.replaceAll(caracter[0],caracter[1]);
    });  
    return texto;
};

const descriptografar = (texto) => {
    mapaCaracteres.forEach((caracter) => {
        texto = texto.replaceAll(caracter[1],caracter[0]);
    }); 
    return texto;
};

ocultarBotaoCopiar();

botaoCriptografar.addEventListener('click', () => {
    textoSaida.value = criptografar(textoEntrada.value);
    mostrarBotaoCopiar();
});

botaoDescriptografar.addEventListener('click', () => {
    textoSaida.value = descriptografar(textoEntrada.value);
    mostrarBotaoCopiar();
});

botaoCopiar.addEventListener('click', async () => {
    await navigator.clipboard.writeText(textoSaida.value);
});