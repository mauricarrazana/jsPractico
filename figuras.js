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