import Command from "../interfaces/command";

export const ping: Command = {
    name: "ping",
    description: "responder com ping",
    run: async (interaction) => {
        await interaction.reply('PONG')
    }
}


