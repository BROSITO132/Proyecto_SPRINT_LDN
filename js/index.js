const list = document.getElementById("characters");
const info = document.getElementById("character-info");

async function loadCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character")
    .catch(err => console.error(err));

  const data = await res?.json();
  renderCharacters(data?.results);
}

function renderCharacters(data) {
  if (!list) return;
  list.innerHTML = "";

  data?.slice(0, 15).forEach((c) => {
    const li = document.createElement("li");
    li.className = "col";
    li.innerHTML = `
            <div class="card p-2 text-center h-100">
                <img src="${c?.image}" class="img-fluid rounded">
                <div class="card-title text-white mt-1 small">${c?.name}</div>
            </div>`;

    const card = li.querySelector(".card");
    if (card) card.onclick = () => selectCharacter(c, card);
    list.appendChild(li);
  });
}

function selectCharacter(c, cardElement) {
  document.querySelectorAll("#characters .card").forEach((x) => x.classList.remove("selected"));
  cardElement?.classList.add("selected");

  info.innerHTML = `
        <h3>${c?.name}</h3>
        <img src="${c?.image}" class="img-fluid img-detalle shadow">
        <p><strong>Estado:</strong> ${c?.status}</p>
        <p><strong>Especie:</strong> ${c?.species}</p>
        <p><strong>Género:</strong> ${c?.gender}</p>
        <p><strong>Origen:</strong> ${c?.origin?.name}</p>`;
}

function renderTemporadas() {
  const pag1 = document.getElementById("temporadas-pag-1");
  const pag2 = document.getElementById("temporadas-pag-2");
  if (!pag1 || !pag2) return;

  [1, 2, 3, 4, 5, 6, 7, 8].forEach((num, i) => {
    const html = `
            <div class="col temp-card-col">
                <div class="text-center">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${num}.jpeg" 
                         class="img-fluid rounded border border-4 border-dark mb-2 img-temporada shadow">
                    <h5 class="texto-temporada">T${num}</h5>
                </div>
            </div>`;
    i < 5 ? (pag1.innerHTML += html) : (pag2.innerHTML += html);
  });
}

window.onload = () => {
  loadCharacters();
  renderTemporadas();
};