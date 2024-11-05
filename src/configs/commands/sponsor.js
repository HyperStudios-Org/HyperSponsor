const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require("discord.js")
const database = require ("mongoose")
const config = require("src/configs/commands/config/config.json")

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("Invia una sponsor.")
.addUserOption( option => option
    .setName("user") 
    .setDescription("L'utente che ha richiesto la sponsor.")
    .setRequire(true)
),

async execute(interaction) {
const user = interaction.option.getUser("user")












},
}