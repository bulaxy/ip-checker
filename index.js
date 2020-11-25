const fs = require('fs');
const publicIp = require('public-ip');
const CONFIG = require('./config/general.json');
const discord = require('./modules/discord');
const mail = require('./modules/mail');
function init() {
    // Make sure file is created to store the ip
    fs.stat(CONFIG.filename, function (err, stat) {
        if (err == null) {
            console.log('File exists');
        } else if (err.code === 'ENOENT') {
            // file does not exist
            fs.writeFile('ip', '');
        } else {
            console.log('Some other error: ', err.code);
        }
        ipCompare()
        setInterval(ipCompare, CONFIG.interval)
    });
}

function ipCompare() {
    publicIp.v4().then(function (newIp) {
        fs.readFile(CONFIG.filename, 'utf-8', function (err, oldIp) {
            if (err) {
                return console.log(err);
            }
            if (oldIp != newIp) {
                if (CONFIG.mail) {
                    mail.main(CONFIG.mailrecipient, "Ip Changed", `Ip changed:${newIp}`)
                }
                if (CONFIG.discord) {
                    discord.main(CONFIG.discordid, `Ip changed:${newIp}`)
                }
                fs.writeFile(CONFIG.filename, newIp, { encoding: 'utf-8' }, function (err, data) {
                    if (err) {
                        console.error(err)
                    }
                });
            }
        });
    })
}

init()