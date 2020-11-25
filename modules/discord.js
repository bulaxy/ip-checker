const Discord = require('discord.js');
const BOTCONFIG = require('../config/discordBot.json');
function main(discordId,content) {
    const client = new Discord.Client();
    client.login(BOTCONFIG.token);
    client.once('ready', function () {
        console.log(`Discord Bot Online... `);
        client.users.fetch(discordId).then(function (user) {
            user.send(content)
        }).then(function () {
            client.destroy()
            return null;
        }).catch(function (error) {
            return error;
        })
    });
};

// Check whether token is correct and able to connect to the client
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