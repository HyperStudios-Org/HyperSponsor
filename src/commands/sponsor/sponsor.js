const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const database = require ("mongoose")
const config = require('../../config/config.json')

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("Invia una sponsor.")
.addUserOption( option => option
    .setName("user") 
    .setDescription("L'utente che ha richiesto la sponsor.")
    .setRequired(true)
),

async execute(interaction) {
const user = interaction.option.getUser("user")












},
}