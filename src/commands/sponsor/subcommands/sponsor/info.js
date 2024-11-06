const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, SlashCommandSubcommandBuilder} = require('discord.js')
const database = require ("mongoose")
const config = require('../../../config.json')
const sponsor = require('.src/commands/sponsor/sponsor.js')

module.exports = {
    data: new SlashCommandSubcommandBuilder ()
    .setName("Info")
    .setDescription("Ottieni tutte le informazioni sulle sponsor."),

    async execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle("(Sponsor info)[https://discord.com/channels/1290660618776612944/1290664005819568230/1303026972884205669]")
        .setColor("0b91dd")
        .setDescription(`Una volta aperto il **ticket** per richiedere la sponsor invia subito il link di invito al tuo server con una **__breve__ descrizione** togliendo i **ping** @everyone e @here.
                        Mentre attendi che uno staffer ti risponda e __proceda__ con la sponsor, crea un __canale__ esclusivo per il nostro server chiamato \`HyperSponsor\` dove inserire (questa descrizione)[https://discord.com/channels/1290660618776612944/1291030589113110601/1302333189477630023].`)
        .setThumbnail(interaction.user.displayAvatarURL({ size: 1024 }))
        .setFooter("HyperSponsor | Sponsor Info");

        return await interaction.reply({ embeds: [embed]})
    }


}












