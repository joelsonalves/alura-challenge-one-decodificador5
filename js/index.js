
const textoEntrada = document.querySelector('#texto-entrada');
const textoSaida = document.querySelector('#texto-saida');
const botaoCriptografar = document.querySelector('#criptografar');
const botaoDescriptografar = document.querySelector('#descriptografar');
const botaoCopiar = document.querySelector('#copiar');

const mapaCaracteres = [
    ['e', 'enter',  ['é', 'è', 'ẽ', 'ê', 'ë']],
    ['i', 'imes',   ['í', 'ì', 'ĩ', 'î', 'ï']],
    ['a', 'ai',     ['á', 'à', 'ã', 'â', 'ä']],
    ['o', 'ober',   ['ó', 'ò', 'õ', 'ô', 'ö']],
    ['u', 'ufat',   ['ú', 'ù', 'ũ', 'û', 'ü']],
]

const ajustarTexto = (texto) => {
    mapaCaracteres.forEach((caractere) => {
        caractere[2].forEach((c) => {
            texto = texto.replaceAll(c, caractere[0]);
        })
    });
    return texto;
};

const ocultarBotaoCopiar = () => {
    botaoCopiar.style.display = 'none';
};

const mostrarBotaoCopiar = () => {
    botaoCopiar.style.display = '';
};

const criptografar = (texto) => {
    mapaCaracteres.forEach((caractere) => {
        texto = texto.replaceAll(caractere[0],caractere[1]);
    });  
    return texto;
};

const descriptografar = (texto) => {
    mapaCaracteres.forEach((caractere) => {
        texto = texto.replaceAll(caractere[1],caractere[0]);
    }); 
    return texto;
};

ocultarBotaoCopiar();

botaoCriptografar.addEventListener('click', () => {
    textoEntrada.value = ajustarTexto(textoEntrada.value);
    textoSaida.value = criptografar(textoEntrada.value);
    mostrarBotaoCopiar();
});

botaoDescriptografar.addEventListener('click', () => {
    textoEntrada.value = ajustarTexto(textoEntrada.value);
    textoSaida.value = descriptografar(textoEntrada.value);
    mostrarBotaoCopiar();
});

botaoCopiar.addEventListener('click', async () => {
    await navigator.clipboard.writeText(textoSaida.value);
});