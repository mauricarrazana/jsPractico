
//Código cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2")

console.groupEnd()

//Código triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1
    + "cm ," 
    + ladoTriangulo2 
    + "cm y "  
    + baseTriangulo 
    + "cm."
    + " La altura es de " + alturaTriangulo
    + "cm"
    )

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro del triangulo es de " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2
console.log("El area del triangulo es de " + areaTriangulo + "cm^2")

console.groupEnd()

//Codigo circulos
console.group("Circulos")

const diametro = 6;
const radio = 6;
const pi = 3.14;

const circunferencia = diametro * pi
console.log ("La circunferencia del circulo es de " + circunferencia + "cm" )

const areaCirculo = (radio * radio) * pi
console.log("El area del circulo es de " + areaCirculo + "cm^2")

console.groupEnd()
