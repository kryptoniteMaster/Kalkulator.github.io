let symbol = prompt("masukkan operator(+,-,/,*,%,**)");
let angka1 = prompt("masukkan angka pertama");
let angka2 = prompt("masukkan angka kedua");
let hasil ="";

if(angka1){
    angka1 = parseInt(angka1)
}

if(angka2){
    angka2 = parseInt(angka2)
}

if(symbol == "+" ){
    hasil = angka1 + angka2;  
}
else if (symbol == "-"){
    hasil = angka1 - angka2;
}
else if (symbol == "/"){
    hasil = angka1 / angka2;
}
else if (symbol == "*"){
    hasil = angka1 * angka2;
}
else if (symbol == "%"){
    hasil = angka1 % angka2;
}
else if (symbol == "**"){
    hasil = angka1 ** angka2;
}

document.write(hasil)