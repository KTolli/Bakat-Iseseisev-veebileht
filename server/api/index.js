

/*Allpool oleva koodi inspiratsiooniks on kasutatud järgnevat allikat: 
https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs */

/**/


const express = require('express')
const sgMail = require('@sendgrid/mail')
const app = express()
const cors = require('cors');
const port = 4000
const SENDGRID_API_KEY = "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"

sgMail.setApiKey(SENDGRID_API_KEY)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.send("Express on Vercel"));


app.post('/mail', (req, res) => {
    const payload = req.body;

    const msg = {
        to: 'karina.baka24@gmail.com',
        from: 'karina.baka24@gmail.com',
        subject: `Email from loomaaed ${payload.name}`,
        html : `<strong>Saatja nimi:</strong> ${payload.name} <br>
                <strong>Saatja email:</strong> ${payload.email} <br>
                <strong>Saatja sisu:</strong> ${payload.content} <br>`
    }

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
            res.send(true)
        })
        .catch((error) => {
            console.error('error', error)
            res.send(false)
        })
        

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})