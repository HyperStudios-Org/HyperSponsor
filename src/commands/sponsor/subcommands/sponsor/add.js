const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, SlashCommandSubcommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js')
const database = require ("mongoose")
const config = require('../../../config.json')
const sponsor = require('.src/commands/sponsor/sponsor.js')
const { execute } = require('./info')


module.exports = {
    data: new SlashCommandSubcommandBuilder ()
    .setName("Add")
    .setDescription("Crea una sponsor.")
    .addUserOption (option => option
        .setName("User")
        .setDescription("L'utente che ha richiesto la sponsor.")
        .setRequired(true)
    )
    .addStringOption(option => option
        .setName("Nome")
        .setDescription("Il nome del server.")
        .setRequired(true)
    ),
    
    async execute(interaction) {
        const Author = interaction.user;
        const User = interaction.options("User");
        const Name = interaction.options.getString("Nome");

        const description = new ModalBuilder()
            .setCustomId("Descrizione")
            .setTitle("Descrizione");

        const descriptionInput = new TextInputBuilder()
            .setCustomId("descriptionInput")
            .setLabel("Inserisci la descrizione del server.")
            .setPlaceholder("Inserisci la descrizione del server.")
            .setStyle(TextInputStyle.Paragraph);

            const ActionRow = new ActionRowBuilder().addComponents(Descrizione)

            description.addComponents(ActionRow)
            await interaction.showModal(description)

        
        let Members;
        let Category;

        switch(Members) {
            case Members < 500:
                Category = "1290664920072851456"
                break;
            case Members < 1000:
                Category = "1290664762224410655"
                break;
            case Members < 2000:
                Category = "1290664602148798464"
                break;
            default:
                Category = "1290664413761638543"
                break;
        }

        const newChannel = await interaction.guild.channels.create({
            name: Name,
            type: 0,
            parent: Category,
        })
        await newChannel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false })
        await interaction.reply(`✅ Canale creato con successo: <#${newChannel.id}>`)







    }
}