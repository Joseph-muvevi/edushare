const nodemailer = require('nodemailer')

// creating the send email
const sendEmail = async (email, subject, text) => {
    try{
        // creating the transporter
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            service: process.env.SERVICE,
            secure: true,
            auth: {                
                user: process.env.USER,
                password: process.env.PASS,
            }
        });

        // sending the Email
        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })

        console.log('Email sent successfully')
    } 

    catch (error) {
        console.log(error, "Something went wrong")
    } 
}


module.exports = sendEmail