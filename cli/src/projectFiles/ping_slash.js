const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'BotのPING値を測定します',
    userPermissions: ['SEND_MESSAGES'],
    type: 'CHAT_INPUT',
    /**
     * 
     * @param { Client } client 
     * @param { CommandInteraction } interaction 
     * 
     */

    run: async (client, interaction, args) => {

        await interaction.deferReply({ ephemeral: false }).catch(() => { }); // これは絶対に削除しないこと

        const pinging = new MessageEmbed()
            .setTitle('🏓 Pinging...')
            .setFooter(
                `${client.user.username}`,
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor('57ffee')
        const msg = await interaction.followUp({ embeds: [pinging] })
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setDescription(`\`\`\`diff\n+ WebSocketの応答速度は${client.ws.ping}msです\n+ メッセージ応答速度は${Math.floor(msg.createdAt - interaction.createdAt)}msです\`\`\``)
            .setFooter(
                `${client.user.username}`,
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor('57ffee')

        msg.edit({ embeds: [embed] })
    }
};