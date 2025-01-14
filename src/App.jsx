import React, { useEffect, useRef } from "react";
import "./App.css";

const characters = [
  {
    nombre: "Monkey D. Luffy",
    imagen: "/images/characters/luffy.jpg",
    bounty: "3.000.000.000",
    saga: ["Romance Dawn", "East Blue", "Enies Lobby", "Marineford"],
    habilidades: [
      "Gomu Gomu no Mi",
      "Haki de Observación",
      "Haki de Armamento",
    ],
    descripcion:
      "Luffy es el capitán de los Piratas del Sombrero de Paja, conocido por su elasticidad debido a la fruta Gomu Gomu no Mi. Su sueño es convertirse en el Rey de los Piratas.",
  },
  {
    nombre: "Roronoa Zoro",
    imagen: "/images/characters/zoro.jpg",
    bounty: "1.111.000.000",
    saga: ["Romance Dawn", "Alabasta", "Dressrosa"],
    habilidades: ["Espadachín de tres espadas", "Haki de Armamento"],
    descripcion:
      "Zoro es un espadachín formidable que lucha usando el estilo de tres espadas. Su sueño es convertirse en el mejor espadachín del mundo.",
  },
  {
    nombre: "Nami",
    imagen: "/images/characters/nami.jpg",
    bounty: "366.000.000",
    saga: ["Arlong Park", "Skypiea", "Dressrosa"],
    habilidades: ["Navegación", "Ladrón", "Cartografía"],
    descripcion:
      "Nami es la hábil navegante de los Piratas del Sombrero de Paja, y sueña con crear el mapa del mundo entero.",
  },
  {
    nombre: "Usopp",
    imagen: "/images/characters/usopp.jpg",
    bounty: "500.000.000",
    saga: ["Syrup Village", "Alabasta", "Water 7"],
    habilidades: ["Francotirador", "Inventor", "Mentiroso"],
    descripcion:
      "Usopp es un francotirador y mentiroso, que lucha con un tirachinas y sueña con convertirse en un gran guerrero del mar, como su padre.",
  },
  {
    nombre: "Sanji",
    imagen: "/images/characters/sanji.jpg",
    bounty: "1.032.000.000",
    saga: ["Baratie", "Alabasta", "Whole Cake Island"],
    habilidades: ["Cocinero", "Luchador", "Haki de Observación"],
    descripcion:
      "Sanji es el cocinero del equipo y un excelente luchador. Sueña con encontrar el All Blue, el mar donde se encuentran todos los mares del mundo.",
  },
  {
    nombre: "Tony Tony Chopper",
    imagen: "/images/characters/chopper.jpg",
    bounty: "1.000",
    saga: ["Drum Island", "Skypiea", "Water 7"],
    habilidades: ["Hito Hito no Mi", "Transformaciones", "Medicina"],
    descripcion:
      "Chopper es un reno que comió la fruta Hito Hito no Mi, lo que le permite transformarse en humano. Sueña con convertirse en el mejor médico del mundo.",
  },
  {
    nombre: "Nico Robin",
    imagen: "/images/characters/robin.jpg",
    bounty: "930.000.000",
    saga: ["Alabasta", "Enies Lobby", "Impel Down"],
    habilidades: ["Hana Hana no Mi", "Arqueología", "Haki de Armamento"],
    descripcion:
      "Robin es una arqueóloga que busca desvelar la historia oculta del mundo y el siglo vacío. Posee la habilidad de la Hana Hana no Mi.",
  },
  {
    nombre: "Franky",
    imagen: "/images/characters/franky.jpg",
    bounty: "394.000.000",
    saga: ["Water 7", "Enies Lobby", "Dressrosa"],
    habilidades: ["Cyborg", "Carpintería", "Superfuerza"],
    descripcion:
      "Franky es el carpintero de los Piratas del Sombrero de Paja, un cyborg con una gran fuerza. Creó el barco Thousand Sunny y luchó contra el gobierno en Enies Lobby.",
  },
  {
    nombre: "Brook",
    imagen: "/images/characters/brook.jpg",
    bounty: "383.000.000",
    saga: ["Thriller Bark", "Sabaody Archipelago", "Dressrosa"],
    habilidades: ["Revive Revive no Mi", "Espadachín", "Música"],
    descripcion:
      "Brook es el músico y espadachín de los Piratas del Sombrero de Paja. Comió la fruta Revive Revive no Mi, lo que lo hace inmortal.",
  },
  {
    nombre: "Jinbe",
    imagen: "/images/characters/jinbe.jpg",
    bounty: "1.100.000.000",
    saga: ["Impel Down", "Marineford", "Whole Cake Island"],
    habilidades: ["Haki de Armamento", "Karate del Mar"],
    descripcion:
      "Jinbe es un hombre pez y ex miembro de los Shichibukai. Es experto en Karate del Mar y un aliado de los Piratas del Sombrero de Paja.",
  },
];

function App() {
  const lista = characters.map(Cards);

  return (
    <div className="flexCenter">
      <div className="cardGrid">{lista}</div>
    </div>
  );
}

function Cards(character) {

  const sagaList = character.saga.map((saga, index) => <li>{saga}</li>);

  const habilidadesList = character.habilidades.map((habilidad, index) => (
    <li>{habilidad}</li>
  ));

  const image =
    character.imagen !== undefined
      ? character.imagen
      : "https://placehold.co/400x300";

  return (
    <div className="card">
      <h1>WANTED</h1>
      <img className="image" src={image} alt={character.nombre} />
      <div className="posterContent">
        <h2 className="dead">DEAD OR ALIVE</h2>
        <h3 className="name">
          {character.nombre.toUpperCase().replaceAll(" ", "·").replaceAll(".", "")}
        </h3>
        <div className="info">
          <p className="bounty">{character.bounty}</p>
          <div className="extraInfo">
            <div className="extraInfoContent">
              <div className="charDescription">{character.descripcion}</div>
              <div className="sagas">
                <h4>Sagas</h4>
                <ul>{sagaList}</ul>
              </div>
              <div className="habilidades">
                <h4>Habilidades</h4>
                <ul>{habilidadesList}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
