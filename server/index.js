// Setting Up Node Server
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

app.use(express.json())

const {EMAIL, EMAIL_PASSWORD} = process.env

// Nodemailer
let nodemailerFunction = (input) => {
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
    let MailOptions = {
        from: email,
        to: EMAIL,
        subject: 'New estimate request made from website',
        text: `A user from the website has requested an estimate. Please follow up with the user.
            Name: ${name},
            Email: ${email},
            Phone: ${phone}`
    }
    
    // Step 3
    transporter.sendMail(MailOptions, (err, data) => {
        if(err){
            console.log('failed to send')
        } else {
            console.log('email sent!')
        }
    })
}

app.post('/api/contact-form', (req, res, next) => {
    console.log('from the api /contact-form', req.body)
    nodemailerFunction(req.body)
})

app.listen(4000, () => console.log('listening on port 4000'))