const Discord = require('discord.js');
const BOTCONFIG = require('../config/discordBot.json');

function main(discordId, content) {
    // Since the client only expect to send a message once a few days, weeks or months, no point to keep the bot login.
    // create a new client, login and destory itself after each message
    const client = new Discord.Client();
    client.login(BOTCONFIG.token);
    client.once('ready', function () {
        console.log(`Discord Bot Online... `);
        // Search the user by discord id. 
        // TODO: Accept array of discord id
        client.users.fetch(discordId).then(function (user) {
            // Send the user the new information being passed
            user.send(content).then(function () {
                // Destory the client, ie logout, after sending the message
                client.destroy()
            })
        })
    });
};

// TODO: Check Token? (not in use)
function init() {
    const client = new Discord.Client();
    client.login(BOTCONFIG.token);
    client.once('ready', function () {
        console.log(`Discord Bot Online... `);
        client.destroy()
    });
}
exports.main = main;
exports.init = init;