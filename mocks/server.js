const express = require('express')
const app = express()
app.use(require('body-parser').json())

const orders = require('./orders.json')
const suppliers = require('./suppliers.json')

// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === 'OPTIONS') {
    res.status(200).end()
  }
  else {
    next();
  }
})



app.use('/supplier/list', (req, res) => {
  const {pageSize=10, pageNumber=1} = req.query;
  let supplierList = [...suppliers.data].slice((pageNumber-1)*pageSize, (pageNumber)*pageSize);
  res.send({results: supplierList, totalResults: suppliers.totalResults});
})


app.use('/supplier/get', (req, res) => {
  const {id} = req.query;
  if (!id) {
    return res.status(400).send('ID param is required');
  }
  const supplier = suppliers.data.find(supplier => supplier.id == id)
  if (supplier) {
    res.json({supplier});
  }
  else {
    res.status(404).send(`Supplier ${id} not found`);
  }

})

app.use('/orderitem/list', (req, res) => {
  const {pageSize=10, pageNumber=1} = req.query;
  let orderList = [...orders.data.rows].slice((pageNumber-1)*pageSize, (pageNumber)*pageSize);
  res.send({results: orderList, totalResults: orders.data.total});
})

app.use('/logon', (req, res) => {
  res.header('Set-Cookie', 'lol45')
  res.json({userId: 1});
})

app.use('/lookups', (req, res) => {

  const response = [
    {
      label: 'Value 1',
      value: 1
    },
    {
      label: 'Value 2',
      value: 2
    },
    {
      label: 'Value 3',
      value: 3
    }
  ]

  res.json(response);
})


app.use('/logon', (req, res) => {
  res.status(401).json({
    reason: 'invalid password'
    // username: 'lol',
    // userId: 1
  })
})
app.listen(8080)
