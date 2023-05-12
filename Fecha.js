//fechas de nacimiento
// Fecha de hoy
const hoy = new Date();

// Fecha de tu nacimiento
const fechaNacimiento = new Date("2000-02-11");

// Variable que indica si hoy es más tarde que la fecha de tu nacimiento
 console.log(hoy > fechaNacimiento);

// Variable que contiene el día de tu nacimiento
 console.log(fechaNacimiento.getDate());

// Variable que contiene el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaNacimiento.getMonth());

// Variable que contiene el año de tu nacimiento (con 4 dígitos)
console.log(fechaNacimiento.getFullYear());