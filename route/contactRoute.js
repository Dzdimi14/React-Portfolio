const router = require('express').Router()
const { data } = require('jquery')
const nodemailer = require('nodemailer')
const { getMaxListeners } = require('process')

router.post("/contact", (req, res)=>{
    let data = req.body
    if (data.name.length < 1 || data.email.length < 1 || data.message.length < 1) {
        console.log("nothing")
        return res.json({msg: "please fill all the fields"})
    }
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user: 'dzdimi14@gmail.com',
                pass: 'C8gh12v7',
            }
        })
        let mailOptions = {
            form: data.email,
            to: 'dzdimi14@gmail.com',
            subject: `message from ${data.name}`,
            html:`
            
            <h3>Information<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
        }
        smtpTransporter.sendMail(mailOptions, (error)=>{
            try {
                if(error) 
                    return res.status(400).json({msg: 'Please fill all the fields'});
                res.status(200).json({msg: 'Thanks for contacting me'});
            } catch (error) {
                if (error) return res.status(500).json({msg: 'There is a server error'});
            }
        })
    
    
})
module.exports=router;
