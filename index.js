const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');
const colors = require('./colors.json');
const bot = new Discord.Client();





bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Over God Coding | .help", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let command = messageArray[0];
    let args = messageArray.slice[0];


    //commands
    if(cmd === `${prefix}ping`) {
        const msg = await message.channel.send("Pinging...");
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }

    if(cmd === `${prefix}website`) {

        var WebsiteEmbed = new Discord.MessageEmbed()
            .setTitle("Website")
            .setDescription("Best coding website right now click on the link and come in to heaven of codes")
            .setThumbnail(message.guild.iconURL())
            .setColor(colors.blue)
            .addFields(
                {name: "link", value:"https://sites.google.com/view/god-coding-v2-smoontie-gay/"},
                {name: "Skins", value:"❌"},
                {name: "ID's", value:"✅"},
                {name: "Backblings", value:"❌"},
                {name: "Pickaxes", value:"✅"},
                {name: "Emotes", value:"✅"},
                {name: "wraps", value:"✅"},
                {name: "weapons", value:"✅"},
                {name: "Status", value:"🟧"},
            )
            .setTimestamp()
            .setFooter("website, 🟧 = half",bot.user.displayAvatarURL());
            
        return message.channel.send(WebsiteEmbed); 
    }

    //if(cmd === `${prefix}website`){
       // return message.reply("Best coding website right now click on the link and come in to heaven of codes https://sites.google.com/view/god-coding-v2-smoontie-gay/")
    //}


    if(cmd === `${prefix}site`){

        var siteEmbed = new Discord.MessageEmbed()
            .setTitle("Site")
            .setDescription("Best coding site right now click on the link and come in to heaven of codes")
            .setThumbnail(message.guild.iconURL())
            .setColor(colors.blue)
            .addFields(
                {name: "link", value:"https://sites.google.com/view/god-coding-v2-smoontie-gay/"},
                {name: "Skins", value:"❌"},
                {name: "ID's", value:"✅"},
                {name: "Backblings", value:"❌"},
                {name: "Pickaxes", value:"✅"},
                {name: "Emotes", value:"✅"},
                {name: "wraps", value:"✅"},
                {name: "weapons", value:"✅"},
                {name: "Status", value:"🟧"},
            )
            .setTimestamp()
            .setFooter("Site, 🟧 = half",bot.user.displayAvatarURL());
            
        return message.channel.send(siteEmbed);
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
    //if(cmd === `${prefix}commands`){
    //return message.reply("\n```commands = .commands``` \n```prefix = . ```  \n```website = .website```   \n```youtube = .youtube```    \n```swapper download = .swapper```  \n```memes = .meme```   \n```cat = .cat```")
    //}
    if(cmd === `${prefix}lol`){
        return message.reply("\n```Your gay``` ")
    }


    // meme meme
   // if(cmd === `${prefix}meme`) {
    //    let msg = await message.channel.send("Fetching a meme, please wait a second!");
    //    fetch('https://meme-api.herokuapp.com/gimme')
    //        .then(res => res.json())
     //       .then(json => {
    //            let embed = new Discord.MessageEmbed()
    //                .setTitle(json.title)
    //                .setColor(colors.red)
     //               .setImage(json.url)
     //               .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
     //           msg.edit(embed)
    //        });
   // }

    //cat commands
    if(cmd === `${prefix}cat`) {
        let msg = await message.channel.send("Fetching a cute cat, please wait a second!");
        fetch('http://aws.random.cat/meow')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("cute cats")
                    .setColor(colors.rose)
                    .setImage(json.file)
                    .setFooter(`Server: God coding`, bot.user.displayAvatarURL());
                msg.edit(embed)
            });
    }
    if(cmd === `${prefix}pussy`) {
        let msg = await message.channel.send("Fetching a cute cat, please wait a second!");
        fetch('http://aws.random.cat/meow')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("cute cats")
                    .setColor(colors.rose)
                    .setImage(json.file)
                    .setFooter(`Server: God coding`, bot.user.displayAvatarURL());
                msg.edit(embed)
            });
    }
    
    //dog command
    if(cmd === `${prefix}dog`) {
        let msg = await message.channel.send("Fetching a cute dog, please wait a second!");
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("cute dogs")
                    .setColor(colors.paars)
                    .setImage(json.message)
                    .setFooter(`Server: God coding`, bot.user.displayAvatarURL());
                msg.edit(embed)
            });
    }

    
    
    //commands help command
    if(cmd === `${prefix}commands`) {

        var CommandEmbed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription("With commands you can get info or you can do some other cool stuff")
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor(colors.orangje)
            .addFields(
                {name: "Website", value:".site/.website"},
                {name: "Youtube", value:".youtube"},
                {name: "Swapper", value:".swapper"},
                {name: "Meme", value:".meme"},
                {name: "Cats", value:".cat"}
            )
            .setTimestamp()
            .setFooter("commands list",bot.user.displayAvatarURL());
            
        return message.channel.send(CommandEmbed);    
    }

    //kick command
    if (cmd === `${prefix}kick`) {
 
        const args = message.content.slice(prefix.length).split(/ +/);
    
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you can not use that command");
    
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("you dont have premissions to do that");
    
        if (!args[1]) return message.reply("No user given.");
    
        if (!args[2]) return message.reply("Please give a reason.");
    
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    
        var reason = args.slice(2).join(" ");
    
        if (!kickUser) return message.reply("No user found.");
    
        var embed = new Discord.MessageEmbed()
            .setColor(colors.red)
            .setThumbnail(kickUser.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setDescription(`** Kicked:** ${kickUser} (${kickUser.id})
            **Kicked by:** ${message.author}
            **Reason: ** ${reason}`);
    
        var embedPrompt = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Please react in 30 sec.")
            .setDescription(`Are you sure you want to kick ${kickUser}?`);
    
    
        message.channel.send(embedPrompt).then(async msg => {
    
            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
    
    
            // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
            // message.channel.awaitMessages(m => m.author.id == message.author.id,
            //     { max: 1, time: 30000 }).then(collected => {
    
            //         if (collected.first().content.toLowerCase() == 'yes') {
            //             message.reply('Kick speler.');
            //         }
            //         else
            //             message.reply('Geanuleerd');
    
            //     }).catch(() => {
            //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
            //     });
    
    
            if (emoji === "✅") {
    
                msg.delete();
    
                kickUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Something went wrong.`);
                });
    
                message.reply(embed);
    
            } else if (emoji === "❌") {
    
                msg.delete();
    
                message.reply("Kick Canceld").then(m => m.delete(5000));
    
            }
    
        });
    }

    // ban command
    if(command === `${prefix}ban`) {
 
        const argument = message.content.slice(prefix.length).split(/ +/);
    
        if (!argument[1]) return message.reply("No user given.");
    
        if (!argument[2]) return message.reply("Please give a reason.");
    
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you can not use that command");
    
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("you dont have premissions to do that");
    
        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(argument[1]));
    
        var reason = argument.slice(2).join(" ");
    
        if (!banUser) return message.reply("No user found.");
    
        var embed = new Discord.MessageEmbed()
            .setColor(colors.red)
            .setThumbnail(banUser.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setDescription(`** Banned:** ${banUser} (${banUser.id})
            **Banned by:** ${message.author}
            **Reason: ** ${reason}`);
    
        var embedPrompt = new Discord.MessageEmbed()
            .setColor("groen")
            .setAuthor("Please react in 30 sec.")
            .setDescription(`Are you sure you want to ban ${banUser}?`);
    
    
        message.channel.send(embedPrompt).then(async msg => {
    
            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
    
    
            // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
            // message.channel.awaitMessages(m => m.author.id == message.author.id,
            //     { max: 1, time: 30000 }).then(collected => {
    
            //         if (collected.first().content.toLowerCase() == 'yes') {
            //             message.reply('Kick speler.');
            //         }
            //         else
            //             message.reply('Geanuleerd');
    
            //     }).catch(() => {
            //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
            //     });
    
    
            if (emoji === "✅") {
    
                msg.delete();
    
               
                banUser.ban(reason).catch(err => {
                    if (err) return message.channel.send(`Something went wrong.`);
                });
    
                message.channel.send(embed);
    
            } else if (emoji === "❌") {
    
                msg.delete();
    
                message.reply("Ban canceld").then(m => m.delete(5000));
    
            }
    
        });
    }




// suggestion command
if (cmd === `${prefix}suggest`) {
 
    message.delete();

    const args = message.content.slice(prefix.length).split(/ +/);

    const suggestion = args.slice(1).join(" ");
    
    const embed = new Discord.MessageEmbed()
        .setColor(colors.yellow)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
        .setDescription(`**Suggestion: ** ${suggestion}`);

    const embedPrompt = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("Please react in 30 sec.")
        .setDescription(`Are you sure you want to suggest this?`);
        

        message.channel.send(embedPrompt).then(async msg => {
    
            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
    

    
    
            if (emoji === "✅") {
    
                msg.delete();
    
                message.channel.send(embed);
    
            } else if (emoji === "❌") {
    
                msg.delete();
    
                message.reply("suggestion canceld").then(m => m.delete(5000));
    
            }
    
        });
    }



    var Channel = message.channel.name

if (message.content === "meme") {
    if(Channel != "🐸memes🐸") {
        message.channel.send('Cannot use command here, ' + message.author);
    } else {
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
    }
}




})  


   // // command export reader
   // (async function registerCommands(dir = 'commands') {
    //    // Read the directory/file.
   //     let files = await fs.readdir(path.join(__dirname, dir));
   //     // Loop through each file.
   //     for(let file of files) {
   //         let stat = await fs.lstat(path.join(__dirname, dir, file));
   //         if(stat.isDirectory()) // If file is a directory, recursive call recurDir
   //         registerCommands(path.join(dir, file));
    //        else {
   //             // Check if file is a .js file.
   //             if(file.endsWith(".js")) {
   //                 let cmdName = file.substring(0, file.index0f(".js"));
    //                let cmdModule = require(path.join(__dirname. dir, file));
   //                 client.commands.set(cmdName, cmdModule);
   //                 console.log(client.commands)
   //             }
  //          }
  //      }
  //  })
//})

// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;
 
    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }
 
    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
 
    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

// bot login dont edit
bot.login(process.env.token);