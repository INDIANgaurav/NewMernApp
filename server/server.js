require('dotenv').config()
const express = require('express') ;
const cors = require('cors') ;
const app = express() ;
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');


const corsOptions = {
    origin : "http://localhost:5173"  ,
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
    credentials : true 
} 

app.use(cors(corsOptions)) ;

app.use(express.json()) ;

//mounting
app.use("/api/v1" , authRoute)
app.use("/api/v1/form" , contactRoute)

app.use(errorMiddleware);

const port = 5000 ;
connectDb().then( () => {

    app.listen( port , () => {
        console.log("server listening on port" , port) ;
    })
})
