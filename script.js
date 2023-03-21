const inputText = document.getElementById('inputText')
const imageContainer = document.getElementById('imageContainer');
let giph;

inputText.addEventListener("change", (e) => {
    fetch(`https://api.giphy.com/v1/gifs/search?&api_key=ZzEyREe5FANMznwtDJKl1D00yep6NUbf&limit=20&q=${e.target.value}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        imageContainer.innerHTML = '';
        for(let i = 0; i < response.data.length; i++){  
            giph = document.createElement("img");
            giph.src = response.data[i].images.fixed_width_downsampled.url;
            imageContainer.appendChild(giph);}
        })
})


