const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "不明なエラーが発生しました" });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        const permission_error = new MessageEmbed()
            .setTitle('⚠️ コマンド実行エラー')
            .setDescription(`あなたの権限が不足しています\n\`\`\`diff\n- ${cmd.userPermissions}\`\`\``)
            .setColor('4BF1FF')
            .setFooter(
                `${client.user.tag}`,
                client.user.displayAvatarURL({ dynamic: true })
            )
        if (!interaction.member.permissions.has(cmd.userPermissions || [])) return interaction.followUp({ embeds: [permission_error] })

        cmd.run(client, interaction, args);
    }
    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});