const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Information')
            .setDescription('[-Twitch](https://www.twitch.tv/tonton_altao)')
            .setColor('00F7FF')
            .addField('Objectif follow', '996/1000 follow',)
            .addField('Objectif sub', '31/35 sub',)
            .setAuthor('Tonton_Altao ', 'https://cdn.discordapp.com/attachments/839612769027358730/839911018669801522/dbz_2.0.jpg', 'https://www.twitch.tv/tonton_altao')
            .setImage('https://cdn.discordapp.com/attachments/839612769027358730/839912040558493716/bot_d.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/839612769027358730/839912721859739658/0349e31d-44d2-4581-97c4-52156862336e-profile_image-300x300.png')
            .setFooter('Partage le discord et mon twitch bg !', 'https://cdn.discordapp.com/attachments/839612769027358730/839912721859739658/0349e31d-44d2-4581-97c4-52156862336e-profile_image-300x300.png')
            .setTimestamp()
            .setURL('https://www.twitch.tv/tonton_altao'))
    },
    name: 'twitch'
}