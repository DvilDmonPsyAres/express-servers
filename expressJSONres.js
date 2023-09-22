
app.get('/artists/latest', (req, res) => {
  try {
    const latestArtists = getLatestArtist();
    res.status(200).json(latestArtists)
  } catch(e){
    console.error('Artist latest error:', e);
  }
})

app.get('/artists/latest/albums', (req, res) => {
  try{
    const latestArtistAlbum = getAlbumsForLatestArtist()
    res.status(200).json(latestArtistAlbum);
  } catch(e) {
    console.error('latest artist albums error:', e);
  }
})

app.post('/artists', (req, res) => {
  try{
    console.log("testing post artist:", req.body)
    const newArtist = addArtist(req.body);
    res.status(201).json(newArtist)
  }
  catch(e) {
    console.error('Error posting new Artist:', e)
  }

})
