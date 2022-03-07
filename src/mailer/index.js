require('dotenv').config()
const mailer = require('nodemailer')
const username = process.env.MAILER_USERNAME
const password = process.env.MAILER_PASSWORD

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: username,
        pass: password
    }
});

async function testMailer() {
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <notifications.helpr@gmail.com>', // sender address
        to: "linarespachecoerick@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log(await info)
}

testMailer()
module.exports = transporter