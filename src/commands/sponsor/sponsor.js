const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const database = require ("mongoose")
const config = require('../../configs/config')
const addSubcommand = require('../sponsor/subcommands/sponsor/add')

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("comandi sponsor")

.addSubcommand (command => command.setName('add')
    .setDescription('add')
    .addUserOption (option => option
        .setName("user")
        .setDescription("L'utente che ha richiesto la sponsor.")
        .setRequired(true)
)
.addStringOption(option => option
    .setName("nome")
    .setDescription("Il nome del server.")
    .setRequired(true)
))
.addSubcommand(command => command.setName('info').setDescription('info')),

async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    
    if (!interaction.replied && !interaction.deferred) {
        await interaction.deferReply({ ephemeral: true });
    }

    if (subcommand === 'add') {
        await addSubcommand.execute(interaction);
    }
}


















}
