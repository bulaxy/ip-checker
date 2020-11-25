const nodemailer = require("nodemailer");
const MAILCONFIG = require('../config/mail.json');
async function main(subject,text) {
    let transportor = nodemailer.createTransport(MAILCONFIG);
    let info = await transportor.sendMail({
        from: `"noreply" <${MAILCONFIG.email}>`,
        to: recipiant,
        subject: subject, // Subject line
        text: text, // html body
    }, function (error, info) {
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