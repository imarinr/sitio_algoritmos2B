// Este script realiza el calculo de un prmedio de 5 calificaciones
// Autor: Ivan Marin
// fecha: 11 de octubre de 2021
function calcularPromedio() { // 1. Inicio
  
  // 2. Definir c1, c2, c3, c4, c5, promedio
  var c1;
  var c2;
  var c3;
  var c4;
  var c5;
  var promedio;
  // 3. Hacer c1 = 10, c2 = 7.5, c3 = 9, c4 = 10, c5 = 10
  c1 = parseFloat(document.getElementById("calificacion1").value);
  c2 = parseFloat(document.getElementById("calificacion2").value);
  c3 = parseFloat(document.getElementById("calificacion3").value);
  c4 = parseFloat(document.getElementById("calificacion4").value);
  c5 = parseFloat(document.getElementById("calificacion5").value);
  // 4. Hacer promedio = c1 + c2 + c3 + c4 + c5 / 5 = 46.5 / 5 = 9.3
  promedio = (c1 + c2 + c3 + c4 + c5) / 5;
  // 5. Imprimir promedio
  alert("Tu promedio es: " + promedio);
} // 6. Fin

// calcularPromedio();
