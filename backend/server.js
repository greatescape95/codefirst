// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const Mailgun = require("mailgun-js")

// START MAILGUN RELATED VARIABLES
//Your api key, from Mailgun’s Control Panel
var apiKey = 'key-083d4570819f908f3561a4f66c6a4fb0';
//Your domain, from the Mailgun Control Panel
var domain = 'sandboxfd786728ba504d5aa063ea89c9c06786.mailgun.org';
//Your sending email address
var sender = 'postmaster@sandboxfd786728ba504d5aa063ea89c9c06786.mailgun.org';
// END MAILGUN RELATED VARIABLES

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../dist'));

app.get("/*", (req, res) => {
    res.sendFile("index.html", { root: "../dist" });
});

app.post("/api/contact", (req, res) => {
    const mailgun = new Mailgun({ apiKey: apiKey, domain: domain });

    let mailData = {
        from: sender,
        to: 'winetastingbrac@gmail.com',
        subject: 'Inquiry from CodeFirst Website',
        html: 'Name: ' + req.body.name + '<br>E-mail:' + req.body.email + '<br>Message:' + req.body.message
    }

    mailgun.messages().send(mailData, function (err, body) {
        if (err) {
            res.status(500).send({ error: err });
        } else {
            res.send('Message is sent');
        }
    });
});

// NODE SERVER
const port = process.env.port || 5020;
app.listen(port, "127.0.0.1", () => {
    console.log("Listening at port " + port + " ...");
})