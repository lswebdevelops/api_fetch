const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');
const img = document.createElement('img');
container.appendChild(img);
img.classList.add('container');


button.addEventListener('click', () => {
  const searchTerm = input.value;
  fetchGif(searchTerm);
  }); 




function fetchGif(searchTerm) {
   fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XjW9YGEYlR8XavZ8Su1WJJI6UOgqp33P&s=${searchTerm}`,
   {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      img.src = response.data.images.original.url;
    })
  .catch((error) => {
    console.log("error: ", error);
  });
}


