require("dotenv").config();
require("express-async-errors");

const express = require('express')
const app = express()

// imports
const connection = require('./db')
const users = require('./routes/users')
const admin = require('./routes/admins')

connection()

// middlewares
app.use(express.json())
app.use('/api/users', users)
app.use('/api/admin', admin)


// port 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Express just started in port: ${port}`))
