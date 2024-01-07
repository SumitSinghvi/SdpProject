const shortid = require('shortid');
const express = require('express');
const cors = require('cors');
const http = require('http');
const { QuickDB } = require("quick.db");
const app = express();
const PORT = 3000; // You can use any available port

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

const db = new QuickDB();
const server = http.createServer(app,{
  cors:{
    origin:"*",
  }
})

// POST endpoint to handle incoming data
app.post('/data', (req, res) => {
  const { combinedData, quantity } = req.body;
  console.log('Received data:');
  const products = generateProducts(combinedData, quantity);
  console.log(products);
  res.status(200).json(products);
});
app.get('/data/:uid', async (req, res) => {
  const uid  = req.params.uid;
  const data = await db.get(uid);
  console.log('Fetched data:',data == null ? "wrong ID" : data);
  res.status(200).json(data);
});;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const manufacturerNAme = 'apple'

function generateProducts(combinedData, quantity) {
  const products = [];
  for (let i = 0; i < quantity; i++) {
    const uid = shortid.generate();
    const product = {
      ID:uid,
      ...combinedData,
    };
    products.push(product);
    db.set(uid, combinedData);
  }
  return products;
}


