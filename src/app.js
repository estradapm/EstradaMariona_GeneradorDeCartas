/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["corazon", "pica", "trebol", "diamante"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const simbolo = {
    corazon: "♥",
    pica: "♠",
    trebol: "♣",
    diamante: "♦"
  };

  function generarCarta() {
    const randomPalos = palos[Math.floor(Math.random() * palos.length)];
    const randomValores = valores[Math.floor(Math.random() * valores.length)];

    let cartaElemento = document.getElementById("card");
    cartaElemento.className = `card ${randomPalos}`;

    document.querySelector(
      ".esquinaSuperior .numero"
    ).textContent = randomValores;
    document.querySelector(".esquinaSuperior .simbolo").textContent =
      simbolo[randomPalos];
    document.querySelector(".centro").textContent = simbolo[randomPalos];
    document.querySelector(
      ".esquinaInferior .numero"
    ).textContent = randomValores;
    document.querySelector(".esquinaInferior .simbolo").textContent =
      simbolo[randomPalos];
  }

  document
    .getElementById("generateCardButton")
    .addEventListener("click", generarCarta);

  generarCarta();
};
