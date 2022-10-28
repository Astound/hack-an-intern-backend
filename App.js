const express = require('express')
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const app = express();

const userRoute = require('./routes/user-route');
const orderRoute = require('./routes/order-route');
app.use(bodyParser.json());

app.use('/user',userRoute);
app.use('/order',orderRoute);
app.listen(5000);

console.log("Server started");
// let surl ="mongodb+srv://harshwander:zEsJF77i4ssmlQzb@dyslexia-1.8d8ksql.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(surl)
//         .then(()=>{
//           console.log("Connected to database");
//         }
//         )
//         .catch( err=>{
//           console.log("connection failed");
//           console.log(err);
//           } 
//         );