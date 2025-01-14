# Practica 5

Está práctica contiene los siguientes dos puntos de la documentación:

- [Renderizando listas](https://react.dev/learn/rendering-lists)

Tal y como digo en cada una de estas prácticas orientadas al aprendizaje de React, debéis sí o sí, leeros la documentación antes de realizar el ejercicio. Es muy importante que lo hagáis así para poder afianzar los conceptos bien. Este ejemplo se basará en el que yo os puse en el ejercicio 3 del examen al principio del trimestre y que ya os he hecho con react en clase.

> [!IMPORTANT] 
> __OJO__, Me tendréis que entregar la solución mediante use de __JS Nativo__ y mediante el uso de __React__.

## Enunciado:

Al igual que en el ejercicio 3 del examen, deberás desplegar en un grid la siguiente información de personajes de _OnePiece_, esto se debe hacer mediante el uso de componentes y la función map.

```js
const characters = [
  {
    nombre: "Monkey D. Luffy",
    saga: ["Romance Dawn", "East Blue", "Enies Lobby", "Marineford"],
    habilidades: ["Gomu Gomu no Mi", "Haki de Observación", "Haki de Armamento"],
    descripcion: "Luffy es el capitán de los Piratas del Sombrero de Paja, conocido por su elasticidad debido a la fruta Gomu Gomu no Mi. Su sueño es convertirse en el Rey de los Piratas.",
  },
  {
    nombre: "Roronoa Zoro",
    saga: ["Romance Dawn", "Alabasta", "Dressrosa"],
    habilidades: ["Espadachín de tres espadas", "Haki de Armamento"],
    descripcion: "Zoro es un espadachín formidable que lucha usando el estilo de tres espadas. Su sueño es convertirse en el mejor espadachín del mundo.",
  },
  {
    nombre: "Nami",
    saga: ["Arlong Park", "Skypiea", "Dressrosa"],
    habilidades: ["Navegación", "Ladrón", "Cartografía"],
    descripcion: "Nami es la hábil navegante de los Piratas del Sombrero de Paja, y sueña con crear el mapa del mundo entero.",
  },
  {
    nombre: "Usopp",
    saga: ["Syrup Village", "Alabasta", "Water 7"],
    habilidades: ["Francotirador", "Inventor", "Mentiroso"],
    descripcion: "Usopp es un francotirador y mentiroso, que lucha con un tirachinas y sueña con convertirse en un gran guerrero del mar, como su padre.",
  },
  {
    nombre: "Sanji",
    saga: ["Baratie", "Alabasta", "Whole Cake Island"],
    habilidades: ["Cocinero", "Luchador", "Haki de Observación"],
    descripcion: "Sanji es el cocinero del equipo y un excelente luchador. Sueña con encontrar el All Blue, el mar donde se encuentran todos los mares del mundo.",
  },
  {
    nombre: "Tony Tony Chopper",
    saga: ["Drum Island", "Skypiea", "Water 7"],
    habilidades: ["Hito Hito no Mi", "Transformaciones", "Medicina"],
    descripcion: "Chopper es un reno que comió la fruta Hito Hito no Mi, lo que le permite transformarse en humano. Sueña con convertirse en el mejor médico del mundo.",
  },
  {
    nombre: "Nico Robin",
    saga: ["Alabasta", "Enies Lobby", "Impel Down"],
    habilidades: ["Hana Hana no Mi", "Arqueología", "Haki de Armamento"],
    descripcion: "Robin es una arqueóloga que busca desvelar la historia oculta del mundo y el siglo vacío. Posee la habilidad de la Hana Hana no Mi.",
  },
  {
    nombre: "Franky",
    saga: ["Water 7", "Enies Lobby", "Dressrosa"],
    habilidades: ["Cyborg", "Carpintería", "Superfuerza"],
    descripcion: "Franky es el carpintero de los Piratas del Sombrero de Paja, un cyborg con una gran fuerza. Creó el barco Thousand Sunny y luchó contra el gobierno en Enies Lobby.",
  },
  {
    nombre: "Brook",
    saga: ["Thriller Bark", "Sabaody Archipelago", "Dressrosa"],
    habilidades: ["Revive Revive no Mi", "Espadachín", "Música"],
    descripcion: "Brook es el músico y espadachín de los Piratas del Sombrero de Paja. Comió la fruta Revive Revive no Mi, lo que lo hace inmortal.",
  },
  {
    nombre: "Jinbe",
    saga: ["Impel Down", "Marineford", "Whole Cake Island"],
    habilidades: ["Haki de Armamento", "Karate del Mar"],
    descripcion: "Jinbe es un hombre pez y ex miembro de los Shichibukai. Es experto en Karate del Mar y un aliado de los Piratas del Sombrero de Paja.",
  },
]; 
```


Se pide que añadas la función map con su respectivo key en cada div. La visualización de las tarjetas NO debe estar controlada por el botón de mostrar.