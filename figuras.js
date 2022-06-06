//Variables
const pi = 3.14;

//Código cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd()

//Código triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
}

console.groupEnd()

//Codigo circulos
console.group("Circulos")

function diametroCirculo(radio){
    return radio * 2;
}

function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd()


//HTML

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    Swal.fire({
        title: 'El perimetro de su cuadrado es igual a ' + perimetro,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#C0392B',
    })
    }


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    Swal.fire({
        title: 'El area de su cuadrado es igual a ' + area,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#C0392B',
    })
    
}

//Triangulo

function calcularPerimetroTriangulo(){  
    const lado1 = document.getElementById("inputTriangulo");
    const lado2 = document.getElementById("inputTriangulo2");
    const base = document.getElementById("inputTriangulo3");

    const i1 = Number(lado1.value);
    const i2 = Number(lado2.value);
    const iB = Number(base.value);

    const perimetro = perimetroTriangulo(i1, i2, iB);
    Swal.fire({
        title: 'El perimetro de su triangulo es igual a ' + perimetro,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#C0392B',
    })
}


function calcularAreaTriangulo(){
    const base = document.getElementById("inputTriangulo4")
    const altura = document.getElementById("inputTriangulo5")
    
    const iB = Number(base.value)
    const iA = Number(altura.value)

    const area = areaTriangulo(iB, iA);
    Swal.fire({
        title: 'El area de su triangulo es igual a ' + area,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#C0392B',
    })
}
