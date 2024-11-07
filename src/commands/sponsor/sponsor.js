const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const database = require ("mongoose")
const config = require('../../configs/config.json')
const addSubcommand = require('../commands/sponsor/subcommand/sponsor/add.js')

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("comandi sponsor")

.addSubcommand (command => command.setName('add')
    .setDescription('add')
    .addUserOption (option => option
        .setName("User")
        .setDescription("L'utente che ha richiesto la sponsor.")
        .setRequired(true)
)
.addStringOption(option => option
    .setName("Nome")
    .setDescription("Il nome del server.")
    .setRequired(true)
))
.addSubcommand(command => command.setName('info').setDescription('info')),

async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    
    if (subcommand === 'add') {
        await addSubcommand.execute(interaction);
    }
}

















}
