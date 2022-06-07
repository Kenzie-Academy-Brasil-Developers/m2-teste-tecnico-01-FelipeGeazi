const lista = document.querySelector(".container");

function montaCard(arr) {
    for (let i = 0; i < arr.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");

        const imgCard = document.createElement("img");
        imgCard.src = arr[i].urlImage;

        const nome = document.createElement("h2");
        nome.innerText = arr[i].nome;

        const idade = document.createElement("h3");
        idade.innerText = arr[i].idade;

        const bio = document.createElement("p");
        bio.innerText = arr[i].bio;

        lista.appendChild(card)
        card.append(imgCard, nome, idade, bio)
    }
    return lista
}

montaCard(pessoas)