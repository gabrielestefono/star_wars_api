const express = require('express')
const mongoose = require('mongoose');


mongoose.connect(process.env.APP_KEY);
const Filme = mongoose.model('Filme', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
  })

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) =>{
  const filme = new Filme({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  })

  await filme.save().then(() => {
    res.send('Filme salvo com sucesso!')
  }).catch((err) => {
    res.send('Erro ao salvar filme!')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})