const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/land")
.then(()=>{
    console.log(`DB connection is successful`)
})
.catch((e)=>{
    console.log(e)
})