const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, SlashCommandSubcommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const database = require("mongoose");
const config = require('../../../../configs/config');
const { execute } = require('./info');

module.exports = {
    data: new SlashCommandSubcommandBuilder()
        .setName("add")
        .setDescription("Crea una sponsor.")
        .addUserOption(option => option
            .setName("user")
            .setDescription("L'utente che ha richiesto la sponsor.")
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName("nome")
            .setDescription("Il nome del server.")
            .setRequired(true)
        ),

    async execute(interaction) {
        const Author = interaction.user;
        const User = interaction.options.getUser("user");
        const Name = interaction.options.getString("nome");

        if (!interaction.deferred && !interaction.replied) {
            await interaction.deferReply({ ephemeral: true });
        }

        const descriptionModal = new ModalBuilder()
            .setCustomId("Descrizione")
            .setTitle("Descrizione");

        const descriptionInput = new TextInputBuilder()
            .setCustomId("descriptionInput")
            .setLabel("Inserisci la descrizione del server.")
            .setPlaceholder("Descrizione del server.")
            .setStyle(TextInputStyle.Paragraph);

        const ActionRow = new ActionRowBuilder().addComponents(descriptionInput);
        descriptionModal.addComponents(ActionRow);

        await interaction.showModal(descriptionModal);

        interaction.client.on('interactionCreate', async (modalInteraction) => {
            if (!modalInteraction.isModalSubmit()) return;

            if (modalInteraction.customId === 'Descrizione') {
                const inputValue = modalInteraction.fields.getTextInputValue('descriptionInput');

                let Members = 300;
                let Category;

                switch (true) {
                    case Members < 500:
                        Category = "1290664920072851456";
                        break;
                    case Members < 1000:
                        Category = "1290664762224410655";
                        break;
                    case Members < 2000:
                        Category = "1290664602148798464";
                        break;
                    default:
                        Category = "1290664413761638543";
                        break;
                }

                const newChannel = await interaction.guild.channels.create({
                    name: `︲${Name}`,
                    type: 0,
                    parent: Category,
                });

                const embed = new EmbedBuilder()
                    .setTitle("Sponsor")
                    .setColor("Blue")
                    .setDescription(`─────── <:mono_megaphone_HY:1291050226894770289>  ───────
<:mono_user_HY:1291050967604658276> **Owner:** ${User}
<:HY_home:1280658819164410030> **Server:** ${Name}
─────────────────`)
                    .setFooter({ text: "HyperSponsor" })
                    .setTimestamp();

                await newChannel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false });
                await newChannel.send(inputValue);
                await newChannel.send({ embeds: [embed] });

                await interaction.editReply({ content: `✅ Canale creato con successo: <#${newChannel.id}>` });
            }
        });
    }
};
