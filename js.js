let selectedCharacter = null;

function selectCharacter(id, cardElement) {
    selectedCharacter = currentData.find(c => c.id === id);

    // Quitamos selección previa
    document.querySelectorAll("#characters .card").forEach(card => {
        card.classList.remove("selected");
    });

    // Marcamos la nueva
    cardElement.classList.add("selected");

    // Actualizamos panel
    const info = document.getElementById("character-info");
    info.innerHTML = `
        <h4 class="mb-3">${selectedCharacter.name}</h4>
        <img src="${selectedCharacter.image}" class="img-fluid rounded mb-3" style="max-width:200px;">
        <p><strong>Estado:</strong> ${selectedCharacter.status}</p>
        <p><strong>Especie:</strong> ${selectedCharacter.species}</p>
        <p><strong>Género:</strong> ${selectedCharacter.gender}</p>
        <p><strong>Origen:</strong> ${selectedCharacter.origin.name}</p>
    `;
}
