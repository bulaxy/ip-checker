const nodemailer = require("nodemailer");
const MAILCONFIG = require('../config/mail.json');

function main(recipiant,subject,text) {
    // Create nodemailer transportor
    let transportor = nodemailer.createTransport(MAILCONFIG);

    // Set up the display Name Desired
    if(MAILCONFIG.displayname){
        var senderDisplay = `${MAILCONFIG.displayname}<${(MAILCONFIG.email)?MAILCONFIG.email:MAILCONFIG.auth.user}></$>`
    }else{
        var senderDisplay = (MAILCONFIG.email)?MAILCONFIG.email:MAILCONFIG.auth.user
    }
    
    // Filling the info
    transportor.sendMail({
        from: senderDisplay,
        to: recipiant,
        subject: subject, // Subject line
        text: text, // html body
    }, function (error) {
        if (error) {
            return error;
        } else {
            return null;
        }
    });
}

function init(){

}
exports.main = main;
exports.init = init;