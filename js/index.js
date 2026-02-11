const list = document.getElementById("characters");
const info = document.getElementById("character-info");

// 1. Cargar personajes
function loadCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => renderCharacters(data.results))
    .catch((err) => console.error("Error:", err));
}

// 2. Renderizar personajes
function renderCharacters(data) {
  if (!list) return;
  list.innerHTML = "";
  data.slice(0, 15).forEach((c) => {
    const li = document.createElement("li");
    li.className = "col";
    li.innerHTML = `
            <div class="card p-2 text-center h-100">
                <img src="${c.image}" class="img-fluid rounded">
                <div class="card-title text-white mt-1 small">${c.name}</div>
            </div>`;
    li.querySelector(".card").onclick = () => selectCharacter(c, li.querySelector(".card"));
    list.appendChild(li);
  });
}

// 3. Seleccionar personaje (Usa clases de CSS ahora)
function selectCharacter(c, card) {
  document.querySelectorAll("#characters .card").forEach((x) => x.classList.remove("selected"));
  card.classList.add("selected");

  info.innerHTML = `
        <h3>${c.name}</h3>
        <img src="${c.image}" class="img-fluid img-detalle shadow">
        <p><strong>Estado:</strong> ${c.status}</p>
        <p><strong>Especie:</strong> ${c.species}</p>
        <p><strong>Género:</strong> ${c.gender}</p>
        <p><strong>Origen:</strong> ${c.origin.name}</p>`;
}

// 4. Renderizar temporadas
function renderTemporadas() {
  const pag1 = document.getElementById("temporadas-pag-1");
  const pag2 = document.getElementById("temporadas-pag-2");
  if (!pag1 || !pag2) return;

  [1, 2, 3, 4, 5, 6, 7, 8].forEach((numero, index) => {
    let diseño = `
            <div class="col temp-card-col">
                <div class="text-center">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${numero}.jpeg" 
                         class="img-fluid rounded border border-4 border-dark mb-2 img-temporada shadow">
                    <h5 class="texto-temporada">T${numero}</h5>
                </div>
            </div>`;
    index < 5 ? pag1.innerHTML += diseño : pag2.innerHTML += diseño;
  });
}

window.onload = () => {
  loadCharacters();
  renderTemporadas();
};