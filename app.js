const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/index.html'))
})

app.get('/babbage', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/babbage.html'))
})
app.get('/berners-lee', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/berners-lee.html'))
})
app.get('/clarke', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/clarke.html'))
})
app.get('/hamilton', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/hamilton.html'))
})
app.get('/hopper', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/hopper.html'))
})
app.get('/lovelace', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/lovelace.html'))
})
app.get('/turing', function (req, res) {
  res.sendFile(path.join(__dirname, 'DH-heroes/views/turing.html'))
})
app.use(express.static('DH-heroes'))

app.listen(3030, function () {
  console.log('Servidor Levantado')
})
