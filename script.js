const imagem = document.getElementById('imagem');

async function randomCachorro() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.message;
            imagem.src = imageUrl;
        } else {
            throw new Error('Algo deu errado na hora de carregar a imagem. :(');
        }
    } catch (error) {
        console.error(error);
        randomCachorro();

    }
}

randomCachorro();
setInterval(randomCachorro, 2500);
