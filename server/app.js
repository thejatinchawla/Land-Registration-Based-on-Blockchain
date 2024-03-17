require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require('./router/routerDetails')
require("./db/conn")
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`)
})