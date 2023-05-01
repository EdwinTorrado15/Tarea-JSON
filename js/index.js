const btnAdd = document.querySelector(".btn-add");
const containerCards = document.querySelector(".container-cards");

const URL = "../dragonBall.json";
let currentIndex = 0;
const dataGlobal = [];

const getData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dataGlobal.push(...data);
  } catch (error) {
    console.log(error);
  }
};

const addCard = (personaje) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <img class="card-image" src="${personaje.image}" alt="Foto carta">
      <div class="card-content">
        <p class="nombre">${personaje.nombre}</p>
        <p class="raza">${personaje.raza}</p>
        <p class="planeta">${personaje.planeta_origen}</p>
      </div>
    `;
  containerCards.appendChild(card);
  currentIndex++;
};

btnAdd.addEventListener("click", () => {
  const siguientePersonaje = dataGlobal[currentIndex];

  // Verificar si el personaje ya ha sido agregado previamente
  const personajeExistente = Array.from(containerCards.children).some(
    (card) =>
      card.querySelector(".nombre").textContent === siguientePersonaje.nombre
  );

  if (personajeExistente) {
    alert("Este personaje ya ha sido agregado");
    return;
  }
  dataGlobal.push(siguientePersonaje);
  addCard(siguientePersonaje);
});

getData();
