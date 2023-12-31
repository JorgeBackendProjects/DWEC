/*Esta función devuelve true o false en función de la comprbación
del palíndromo. Si una sola letra es distinta de la letra de la 
cadena invertida en la misma posición devolverá false.*/
function esPalindromo(frase){
    let resultado = true;

    let nuevaCadena = limpiarCadena(sustituirTildes(frase.toLowerCase()));
    let cadenaReversa = invertirFrase(nuevaCadena);

    console.log(nuevaCadena);
    console.log(cadenaReversa);

    for(let i = 0; i<nuevaCadena.length; i++){
        if(nuevaCadena[i] != cadenaReversa[i]){
            resultado = false;
        }
    }

    return resultado;
}

/*Comprobamos letra a letra si coincide con un caracter del 
alfabeto para almacenarlo en otra variable y devolverlo.*/
function limpiarCadena(frase){
    let cadenaLimpia = "";

    for(let i = 0; i<frase.length; i++){
        if(frase[i].match(/[a-z]/)){
            cadenaLimpia += frase[i];
        }
    }

    return cadenaLimpia;
}

/*Cambiamos las vocales con tilde y devolvemos la cadena*/
function sustituirTildes(frase){
    let cadenaLimpia = "";

    for(let i = 0; i<frase.length; i++){
        switch(frase[i]){
            case "á":
                cadenaLimpia += 'a';
                break;
            case "é":
                cadenaLimpia += 'e';
                break;
            case "í":
                cadenaLimpia += 'i';
                break;
            case "ó":
                cadenaLimpia += 'o';
                break;
            case "ú":
                cadenaLimpia += 'u';
                break;
            default:
                cadenaLimpia += frase[i];
                break;
        }
    }

    return cadenaLimpia;
}

/*Invertimos la frase y la devolvemos*/
function invertirFrase(frase){
    /*Con split('') separamos por caracteres en un array,
    le damos la vuelta con reverse() y lo volvemos a unir
    en una cadena con join('').*/
    return frase.split('').reverse().join('');
}

//console.log(esPalindromo("Sé verlas al revés"));