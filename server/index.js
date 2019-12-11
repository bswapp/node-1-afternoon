const express = require('express')
const app = express()
const SERVER_PORT = 300
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products/', getProducts)
app.get('/api/product/:id', getProduct)


app.listen(SERVER_PORT, () => console.log('welcome to the club'))