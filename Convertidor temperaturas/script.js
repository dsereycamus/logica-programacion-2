let tempCel;

do {
  tempCel = prompt("Ingrese una temperatura en grados Celsius: ");

  if (tempCel === null) {
    console.log("Operación cancelada por el usuario");
    break; // Salir del bucle si se cancela la entrada
  }

  if (tempCel === "") {
    console.log("Error: Debe ingresar un valor");
  } else if (!isNaN(tempCel)) {
    tempCel = Number(tempCel);
  } else {
    console.log("Error: Ingrese un número válido");
  }
} while (isNaN(tempCel) || tempCel === "");

if (tempCel !== "" && tempCel !== null) { // Comprobar si el valor no es una cadena vacía ni null
  const tempFar = tempCel * 9 / 5 + 32;
  const tempKev = tempCel + 273.15;

  console.log(`${tempCel}°C = Equivalen a ${tempFar}°F y a ${tempKev}°K`);
}

// let tempCel;

// do {
//   tempCel = prompt("Ingrese una temperatura en grados Celsius: ");
//   if (!isNaN(tempCel)) {
//     tempCel = Number(tempCel);
//   } else {
//     console.log("Error: Ingrese un número válido.");
//   }
// } while (isNaN(tempCel));

// const tempFar = tempCel * 9 / 5 + 32;
// const tempKev = tempCel + 273.15;

// console.log(`${tempCel}°C = Equivalen a ${tempFar}°F y a ${tempKev}K`);






// const tempCel = Number(prompt("Ingrese una temperatura en grados Celsius: "));
// const tempFar = tempCel * 9 / 5 + 32;
// const tempKev = tempCel + 273.15;
// console.log(`${tempCel}°C = Equivalen a ${tempFar}°F y a ${tempKev}K`);