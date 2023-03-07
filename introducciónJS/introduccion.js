//función alert muestra una alerta con el mensaje entre parénteis
//No olvidar nunca el ;
//---alert("Hola JavaScript");
//función console.log muestra el mensjae en la consola
//---console.log("Hola Mundo de JavaScript")
//Para definir una variable se usa var o let, var es variable global y let variable local
//cons=5, es una variable constante
/*let a=18;
console.log(a)
let b=19;
console.log(b)
console.log(a+b)*/
//peraciones aritméticas + - % /
//Operaciones de comparación < > <= >= ==(igual) ===(exactamente igual, incluye tipo de dato)
// Operaciones lógicas AND(&&) y OR(||)
//decisión:
//if (condición){}    else{}

//función prompt() captura datos ingresados por el usuario
//función document.write() escribe en un documento

/*let nombre=prompt();
document.write("Hola "+ nombre + " , espero tengas un buen día");*/

//crear una función e JavaScript
function calcular(base, altura) {
  let area;
  let perimetro;
  area = base * altura;
  perimetro = 2 * (base + altura);
  return [area, perimetro];
}

function calcularHipotenusa(a, b) {
  //Potenciación usando la librería Math----Math.pow(a,b) a=base, b=exponente
  const hipotenusa = Math.sqrt(a ** 2 + b ** 2);
  return hipotenusa;
}

/*let resultado=calcular(3,5);
document.write(resultado);
let hipotenusa=calcularHipotenusa(3,4);
document.write(hipotenusa);*/

//document.writeln imprime con un espacio
/*function calcular(a, b) {
  document.writeln(a + b);
  document.writeln(a - b);
  document.writeln(a / b);
  document.writeln(a * b);
}
calcular(10, 2);
//console.warm sale en la consola el ícono de warning
//console.err sale en la consola el ícono de error*/

//document.getElementById coge el elemento del html que tenga la id
//Coge todo el elemento, no sólo su valor

function promedio(a, b, c) {
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  let z = parseInt(document.getElementById("z").value);

  //Casting= tranformar de manera explícita el tipo del dato
  //se hace con parseInt(), Int es entero
  let prom =(x+y+z)/3;
  console.log(prom);
}
