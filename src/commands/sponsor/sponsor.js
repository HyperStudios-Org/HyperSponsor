const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const database = require ("mongoose")
const config = require('../../config/config.json')

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("comandi sponsor")
.addSubcommand (subCommand => subCommand
    .setName("Add")
    .setDescription("Crea una nuova sponsor")
    .addUserOption(Option => Option
        .setName("User")
        .setDescription("L'utente che ha richiesyo la sponsor.")
    )
)
.addSubcommand (subCommand => subCommand
    .setName("Delete")
    .setDescription("Elimina una sponsor.")
    .addStringOption(option => option
        .setName("ID")
        .setDescription("L'Id della partner che vuoi eliminare.")
    )
.addSubcommand (subCommand => subCommand
    .setName("Info")
    .setDescription("Ottieni tutte le informazioni sulle sponsor.")
)
)














}