const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // .clear 21

    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You Dont have Permissions to do that")

    if (!args[0]) return message.reply("How many")

}


module.exports.help = {
    name: "clear"
}