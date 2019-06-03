const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'rohan@glacelabs.com',
        subject: 'Welcome to the app!',
        text: `Hey ${name}! Nice to see you! We hope you enjoy our application!`
    })
}

const sendFarewellEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'rohan@glacelabs.com',
        subject: 'Sorry to see you go!',
        text: `Hey ${name}! We're sorry to hear you deleted your account. Was it something we did?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}

