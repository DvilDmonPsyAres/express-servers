fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Led Zeppelin',
    year: '1988',
    isFavorite: false, // Assuming you want a boolean value
  }),
})
  .then((response) => {
    // Handle the response here
  })
  .catch((error) => {
    // Handle errors here
  });
