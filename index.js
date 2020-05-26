const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');
const colors = require('./colors.json');
const fs = require('fs').promises;
const path = require('path')
const bot = new Discord.Client();




bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Over God Coding | &", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];


    //commands
    if(cmd === `${prefix}ping`) {
        const msg = await message.channel.send("Pinging...");
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }

    if(cmd === `${prefix}website`){
        return message.reply("Best coding website right now click on the link and come in to heaven of codes https://sites.google.com/view/god-coding-v2-smoontie-gay/")
    }
    if(cmd === `${prefix}serverinfo`){
        let sEmbed = new Discord.MessageEmbed()
        .setColor(colors.blue)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`${message.guild.name} info`, bot.user.displayAvatarURL())
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .setFooter(`God Coding | Prefix &`, bot.user.displayAvatarURL());
        message.channel.send({embed: sEmbed});
    }
    if(cmd === `${prefix}userinfo`){
        let sEmbed = new Discord.MessageEmbed()
        .setColor(colors.blue)
        .setTitle("user-info")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`${message.author.username} info`, message.author.displayAvatarURL())
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setFooter(`God Coding | Prefix &`, bot.user.displayAvatarURL());
        message.channel.send({embed: sEmbed});
    }
    if(cmd === `${prefix}youtube`){
        return message.reply("\nHere is the god coding youtube where are a lot of good tutorials for Fortnite hxd coding \nhttps://www.youtube.com/channel/UCKou6Uf7Ew4Vlv9yaGgon5Q")
    }
    if(cmd === `${prefix}swapper`){
        return message.reply("\n```soon``` ")
    }
    if(cmd === `${prefix}&`){
        return message.reply("\n```Invalid argument``` ")
    }
    if(cmd === `${prefix}commands`){
    return message.reply("\n```commands = .commands``` \n```prefix = . ```  \n```website = .website```   \n```youtube = .youtube```    \n```swapper download = .swapper```  \n```memes = .meme```   \n```cat = .cat```")
    }
    if(cmd === `${prefix}lol`){
        return message.reply("\n```Your gay``` ")
    }

    if(cmd === `${prefix}meme`) {
        let msg = await message.channel.send("Fetching a meme, please wait a second!");
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setColor(colors.red)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                msg.edit(embed)
            });
    }

    if(cmd === `${prefix}kick`) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have permission!');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.reply("Please mention a valid user");
        if(!member.kickable) return message.channel.send("Sorry I cannot kick that person! Do they have a higher role?");
 
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
 
        await member.kick(reason)
            .catch(e => message.reply(`Sorry I couldn't kick them! Error: ${e}`));
        message.reply(`:white_check_mark: User kicked!`);
    }

    if(cmd === `${prefix}cat`) {
        let msg = await message.channel.send("Fetching a cute cat, please wait a second!");
        fetch('http://aws.random.cat/meow   ')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setColor(colors.red)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                msg.edit(embed)
            });
    }
    // command export reader
    (async function registerCommands(dir = 'commands') {
        // Read the directory/file.
        let files = await fs.readdir(path.join(__dirname, dir));
        console.log(files);
        // Loop through each file.
        for(let file of files) {
            let stat = await fs.lstat(path.join(__dirname, dir, file));
            if(stat.isDirectory()) // If file is a directory, recursive call recurDir
                registerModels(path.join(dir, file));
            else {
                // Check if file is a .js file.
                if(file.endsWith(".js")) {

                }
            }
        }
    })
})

// bot login dont edit
bot.login(process.env.token);