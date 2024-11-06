const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const database = require ("mongoose")
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
.setName("sponsor")
.setDescription("comandi sponsor")

.addSubcommand (Add.data)
.addSubcommand (Delete.data)
.addSubcommand (Info.data)















}