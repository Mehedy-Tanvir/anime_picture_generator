const btn = document.querySelector('#btn');
const animeContainer = document.querySelector('.anime-container');
const animeImg = document.querySelector('.anime-img');
const animeName = document.querySelector('.anime-name')

btn.addEventListener('click', async function () {

    try {
        btn.disabled = true;
        btn.innerText = "Loading..."
        animeName.innerText = "Updating...";
        animeImg.src = "spinner.svg";
        let data = await (await fetch('https://api.catboys.com/img')).json();
        btn.disabled = false;
        btn.innerText = "Get Anime";

        animeContainer.style.display = 'block';
        animeImg.src = data.url;
        animeName.innerText = data.artist;



    } catch (error) {

        console.log(error);
        btn.disabled = false;
        btn.innerText = "Get Anime";
        animeName.innerText = "An Error Occured! Try Again Later!";
    }
});
