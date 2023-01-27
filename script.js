const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=XjW9YGEYlR8XavZ8Su1WJJI6UOgqp33P&s=cat', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  });