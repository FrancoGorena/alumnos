const alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  }, 
  {
    nombre: 'Pedro Rodriguez',
    nota: 4
  }, 
  {
    nombre: 'Roxana García',
    nota: 8
  }, 
  {
    nombre: 'Luciano Lopez',
    nota: 5
  }, 
  {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, 
  {
    nombre: 'Florencia Martinez',
    nota: 10
  }, 
  {
    nombre: 'Raul Sanchez',
    nota: 7
  }, 
  {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];

let aprobados = alumnos.filter(function(alumno) {
  return alumno.nota >= 7;
}).map(function(alumno) {
  return alumno.nombre + (' ') + alumno.nota;
}).join(", ");

let resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "Los alumnos aprobados son: " + aprobados;
