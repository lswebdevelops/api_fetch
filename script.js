function fetchGif(className, searchTerm) {
  const img = document.querySelector(className);
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XjW9YGEYlR8XavZ8Su1WJJI6UOgqp33P&s=${searchTerm}`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      img.src = response.data.images.original.url;
    });
}
//cats
fetchGif('.cats', 'cat');
//dogs
fetchGif('.dogs', 'dogs');
//men
fetchGif('.men', 'men');
//women
fetchGif('.women', 'women')
//babies
fetchGif('.babies', 'babies');
//boys
fetchGif('.boys', 'boys');
//girls
fetchGif('.girls', 'girls');
