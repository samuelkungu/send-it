const express = require('express')
const app = express ()

app.use(express.json())
app.use('/Parcel-Delivery', require('./Routes/userRoutes'))
app.listen(3005, ()=> {
    console.log("Server Is Running on port 3005")
})