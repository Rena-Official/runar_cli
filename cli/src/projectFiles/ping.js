const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    usage: '',
    description: 'BotのPING値を測定します',
    aliases: [''],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const pinging = new MessageEmbed()
            .setTitle('🏓 Pinging...')
            .setFooter(
                `${client.user.username}`,
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor('57ffee')
        const msg = await message.reply({ embeds: [pinging] })
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setDescription(`\`\`\`diff\n+ WebSocketの応答速度は${client.ws.ping}msです\n+ メッセージ応答速度は${Math.floor(msg.createdAt - message.createdAt)}msです\`\`\``)
            .setFooter(
                `${client.user.username}`,
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor('57ffee')
        msg.edit({ embeds: [embed] })
    }
}