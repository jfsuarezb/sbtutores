const express = require('express');
const path = require('path');
const jsonParser = require('body-parser').json();
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8000;

let en = process.env.NODE_ENV;


if (en === 'production') {
    app.use(express.static('client/build'));

    app.post('/mail',jsonParser,(req,res)=>{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user:process.env.EMAIL_USERNAME,
                pass:process.env.EMAIL_PASSWORD
            }
        });
        
        let mailOptions = {
            from:process.env.EMAIL_USERNAME,
            to:process.env.RECEIVING_EMAIL,
            subject:'Nueva Tutoria!',
            text:`Nombre: ${req.body.name}\nApellido: ${req.body.lastname}\nContacto: ${req.body.contact}\nMateria: ${req.body.subject}`
        }
        
        transporter.sendMail(mailOptions);
        res.sendStatus(200);
    });
    app.get('/',(req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port, ()=>{console.log(`server running on ${port} ${en}`)})
