require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection= require('./db.js')
const {notFound,errorHandling} = require('./Utils/errorHandler.js')
const userRoute= require('./Routes/UserRoutes.js')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api',userRoute);
app.use(notFound);
app.use(errorHandling)

const PORT= process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log('Hello👋');
})
