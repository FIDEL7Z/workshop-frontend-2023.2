document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let idx = 0;
    const interval = 2000; 

    function carrossel() {
        images[idx].classList.remove("active"); // Remove a classe "active" da imagem atual
        idx++;

        if (idx >= images.length) {
            idx = 0;
        }

        images[idx].classList.add("active"); 

        
        setTimeout(carrossel, interval);
    }

    
    carrossel();
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('a[href="#top"]');

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector('#top');
        const targetOffset = targetElement.getBoundingClientRect().top;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});
function fetchAndFillCharacterDetails(cardId, characterId) {
    fetch(`https://swapi.dev/api/people/${characterId}/`)
        .then((response) => response.json())
        .then((data) => {
            const characterCard = document.getElementById(cardId);
            characterCard.querySelector('h2').textContent = data.name;
            characterCard.querySelector('img').src = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
            characterCard.querySelector('p:nth-child(3)').textContent = `Mass: ${data.mass}`;
            characterCard.querySelector('p:nth-child(4)').textContent = `Hair Color: ${data.hair_color}`;
            characterCard.querySelector('p:nth-child(5)').textContent = `Skin Color: ${data.skin_color}`;
            characterCard.querySelector('p:nth-child(6)').textContent = `Eye Color: ${data.eye_color}`;
            characterCard.querySelector('p:nth-child(7)').textContent = `Birth Year: ${data.birth_year}`;
            characterCard.querySelector('p:nth-child(8)').textContent = `Gender: ${data.gender}`;
        })
        .catch((error) => {
            console.error('Erro ao buscar dados do personagem', error);
        });
}


fetchAndFillCharacterDetails('character-card-1', 1);
fetchAndFillCharacterDetails('character-card-2', 2);
fetchAndFillCharacterDetails('character-card-3', 3);
fetchAndFillCharacterDetails('character-card-4', 4);
fetchAndFillCharacterDetails('character-card-5', 5);
fetchAndFillCharacterDetails('character-card-6', 6);
