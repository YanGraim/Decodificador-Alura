function criptografar(texto) {
    const regras = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    texto = texto.toLowerCase();

    for (let [original, criptografado] of regras) {
        texto = texto.replaceAll(original, criptografado);
    }

    return texto;
}

function descriptografar(texto) {
    const regras = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];

    texto = texto.toLowerCase();

    for (let [criptografado, original] of regras) {
        texto = texto.replaceAll(criptografado, original);
    }

    return texto;
}

function btnEncriptar() {
    const inputElemento = document.querySelector('.textarea');
    const inputTexto = inputElemento.value;

    if (inputTexto.trim() === '') {
        alert("Por favor, escreva algo para criptografar.");
        return;
    }

    const resultado = criptografar(inputTexto);
    document.querySelector('.message').value = resultado;
    document.querySelector('.image-result').style.display = 'none';
    inputElemento.value = '';
}

function btnDesencriptar() {
    const inputElemento = document.querySelector('.textarea');
    const inputTexto = inputElemento.value;

    if (inputTexto.trim() === '') {
        alert("Por favor, escreva algo para descriptografar.");
        return;
    }

    const resultado = descriptografar(inputTexto);
    document.querySelector('.message').value = resultado;
    document.querySelector('.image-result').style.display = 'none';
    inputElemento.value = '';
}



function copiarTexto() {
    const textoCopiado = document.querySelector('.message');
    const texto = textoCopiado.value;

    if (texto.trim() === '') {
        alert("Não há nada a ser copiado.");
        return;
    }

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto copiado para a área de transferência!");
}
