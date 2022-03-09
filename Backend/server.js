const express = require('express')
const app = express ()

app.use(express.json())
// -------------- CONNECTING TO USERS ROUTES ------------------
app.use('/users', require('./Routes/userRoutes'))
// -------------- CONNECTING TO PARCELS ROUTES ------------------
app.use('/parcels', require('./Routes/parcelRoutes'))


app.listen(3005, ()=> {
    console.log("Server Is Running on port 3005")
})