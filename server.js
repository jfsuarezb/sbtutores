const express = require('express');
const path = require('path');
const jsonParser = require('body-parser').json();
require('dotenv').config();
const mailgun = require("mailgun-js")({apiKey: process.env.API_KEY, domain: process.env.DOMAIN_NAME})

const app = express();
const port = process.env.PORT || 8000;

let en = process.env.NODE_ENV;


if (en === 'production') {
    app.use(express.static('client/build'));

    app.post('/mail',jsonParser,(req,res)=>{
        
        const data = {
            from: `Informer <mailgun@${process.env.DOMAIN_NAME}>`,
            to: process.env.RECEIVER,
            subject: "Nueva Tutoria!",
            text: `Nombre: ${req.body.name}\nApellido: ${req.body.lastname}\nContacto: ${req.body.contact}\nMateria: ${req.body.subject}`
        };

        mailgun.messages().send(data, (error, body) => {
            console.log(body);
        });

        res.sendStatus(200);
    });
    app.get('/',(req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port, ()=>{console.log(`server running on ${port} ${en}`)})
