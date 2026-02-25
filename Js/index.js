
        let page = 1;
        let currentData = [];
    const list = document.getElementById("characters");
    const info = document.getElementById("character-info");

    function loadCharacters() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                currentData = data.results;
                renderCharacters(currentData);
            });
    }

    function renderCharacters(data) {
        list.innerHTML = "";
        data.slice(0, 15).forEach(c => {
            const li = document.createElement("li");
            li.className = "col";
            li.innerHTML = `
                <div class="card p-2 text-center">
                    <img src="${c.image}" class="img-fluid">
                    <div class="card-title">${c.name}</div>
                </div>`;
            li.querySelector(".card").onclick = () => selectCharacter(c, li.querySelector(".card"));
            list.appendChild(li);
        });
    }

    function selectCharacter(c, card) {
        document.querySelectorAll("#characters .card").forEach(x => x.classList.remove("selected"));
        card.classList.add("selected");

        info.innerHTML = `
            <h3>${c.name}</h3>
            <img src="${c.image}" class="img-fluid rounded mb-3" style="max-width:260px;">
            <p><strong>Estado:</strong> ${c.status}</p>
            <p><strong>Especie:</strong> ${c.species}</p>
            <p><strong>Género:</strong> ${c.gender}</p>
            <p><strong>Origen:</strong> ${c.origin.name}</p>`;
    }

        function renderTemporadas() {
            // 1. Buscamos los "huecos" donde vamos a meter las temporadas
            const pag1 = document.getElementById("temporadas-pag-1");
            const pag2 = document.getElementById("temporadas-pag-2");

            // 2. Creamos una lista manual de 8 temporadas (del 1 al 8)
            const totalTemporadas = [1, 2, 3, 4, 5, 6, 7, 8];

            // 3. Empezamos a recorrer esa lista una por una
            totalTemporadas.forEach((numero, index) => {

                // Aquí guardamos el diseño de la tarjeta en una variable
                // Usamos las comillas invertidas `` para poder meter el número de temporada
                let diseñoTarjeta = `
    <div class="col" style="flex: 0 0 20%; max-width: 20%;">
        <div class="text-center">
            <img src="https://rickandmortyapi.com/api/character/avatar/${numero}.jpeg" 
                 class="img-fluid rounded border border-4 border-dark mb-2 img-temporada shadow">
            
            <h5 class="texto-temporada">TEMPORADA ${numero}</h5>
        </div>
    </div>
`;

                // 4. Lógica de reparto: 
                // Si el índice es menor a 5 (posiciones 0,1,2,3,4), va a la página 1.
                if (index < 5) {
                    pag1.innerHTML += diseñoTarjeta;
                } else {
                    // Si no, va a la página 2.
                    pag2.innerHTML += diseñoTarjeta;
                }
            });
        }
        // En lugar de llamar a la función a secas, asegúrate de que el carrusel se inicialice después
        renderTemporadas();

        // Carga inicial
        loadCharacters();

        function renderTemporadas() {
            // 1. Buscamos los "huecos" donde vamos a meter las temporadas
            const pag1 = document.getElementById("temporadas-pag-1");
            const pag2 = document.getElementById("temporadas-pag-2");

            // 2. Creamos una lista manual de 8 temporadas (del 1 al 8)
            const totalTemporadas = [1, 2, 3, 4, 5, 6, 7, 8];

            // 3. Empezamos a recorrer esa lista una por una
            totalTemporadas.forEach((numero, index) => {

                // Aquí guardamos el diseño de la tarjeta en una variable
                // Usamos las comillas invertidas `` para poder meter el número de temporada
                let diseñoTarjeta = `
    <div class="col" style="flex: 0 0 20%; max-width: 20%;">
        <div class="text-center">
            <img src="https://rickandmortyapi.com/api/character/avatar/${numero}.jpeg" 
                 class="img-fluid rounded border border-4 border-dark mb-2 img-temporada shadow">
            
            <h5 class="texto-temporada">TEMPORADA ${numero}</h5>
        </div>
    </div>
`;

                // 4. Lógica de reparto: 
                // Si el índice es menor a 5 (posiciones 0,1,2,3,4), va a la página 1.
                if (index < 5) {
                    pag1.innerHTML += diseñoTarjeta;
                } else {
                    // Si no, va a la página 2.
                    pag2.innerHTML += diseñoTarjeta;
                }
            });
        }
        // En lugar de llamar a la función a secas, asegúrate de que el carrusel se inicialice después
        

        // Esto fuerza a Bootstrap a reconocer el carrusel después de inyectar las fotos
        const myCarousel = new bootstrap.Carousel(document.getElementById('carouselTemporadas'));

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



            function renderCharacters(data) {
                list.innerHTML = "";
                data.slice(0, 15).forEach(c => {
                    const li = document.createElement("li");
                    li.className = "col";
                    li.innerHTML = `
                        <div class="card p-2 text-center">
                            <img src="${c.image}" class="img-fluid">
                            <div class="card-title" style="font-size:0.7rem">${c.name}</div>
                        </div>`;
                    li.querySelector(".card").onclick = () => selectCharacter(c, li.querySelector(".card"));
                    list.appendChild(li);
                });
            }

            function selectCharacter(c, card) {
                document.querySelectorAll("#characters .card").forEach(x => x.classList.remove("selected"));
                card.classList.add("selected");
                info.innerHTML = `
                    <h3>${c.name}</h3>
                    <img src="${c.image}" class="img-fluid rounded mb-3" style="max-width:260px;">
                    <p><strong>Estado:</strong> ${c.status}</p>
                    <p><strong>Especie:</strong> ${c.species}</p>
                    <p><strong>Género:</strong> ${c.gender}</p>
                    <p><strong>Origen:</strong> ${c.origin.name}</p>`;
            }

            