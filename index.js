// Setting Up Node Server
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const path = require('path')
const xoauth2 = require('xoauth2');

app.use(express.json())

const {EMAIL, EMAIL_PASSWORD} = process.env

// Nodemailer
let nodemailerFunction = (input) => {
    console.log('nodemailer input', input)
    const {name, email, phone} = input

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    });

    // Step 2 
    let mailOptions = {
        from: email,
        to: EMAIL,
        subject: 'New estimate request made from website',
        text: `A user from the website has requested an estimate. Please follow up with the user.
            Name: ${name},
            Email: ${email},
            Phone: ${phone}`
    }
    
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            console.log('failed to send', err)
        } else {
            console.log('email sent!')
        }
    })
}


// Formik Endpoint
app.post('/api/contact-form', (req, res, next) => {
    console.log('from the api /contact-form', req.body)
    nodemailerFunction(req.body)
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'));
    // Index route
    // app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname + 'build/index.html'));
    // });
}


app.listen(10000, () => console.log('listening on port 10000'))