const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle} = require('discord.js')
const database = require ("mongoose")
const config = require('../../configs/config')

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
    
        await interaction.deferReply({ ephemeral: true })

    if (subcommand === 'add') {
        const Author = interaction.user;
        const User = interaction.options.getUser("user");
        const Name = interaction.options.getString("nome");


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

                await modalInteraction.editReply({ content: `✅ Canale creato con successo: <#${newChannel.id}>` });
            }
        });
    }

    else if (subcommand === 'info') {
        const info = new EmbedBuilder()
        .setTitle("(Sponsor info)[https://discord.com/channels/1290660618776612944/1290664005819568230/1303026972884205669]")
        .setColor("0b91dd")
        .setDescription(`Una volta aperto il **ticket** per richiedere la sponsor invia subito il link di invito al tuo server con una **__breve__ descrizione** togliendo i **ping** @everyone e @here.
                        Mentre attendi che uno staffer ti risponda e __proceda__ con la sponsor, crea un __canale__ esclusivo per il nostro server chiamato \`HyperSponsor\` dove inserire (questa descrizione)[https://discord.com/channels/1290660618776612944/1291030589113110601/1302333189477630023].`)
        .setThumbnail(interaction.user.displayAvatarURL({ size: 1024 }))
        .setFooter("HyperSponsor | Sponsor Info");

        return await interaction.editReply({ embeds: [info]})
    }
}


















}
