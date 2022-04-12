import Commands from "../interfaces/command";
import Bot from './bot'

class CommandListenner {
    constructor(private commands: Commands[]) {
        if (!Bot.client) return
        Bot.client.on('interactionCreate', async (interaction) => {
            if (!interaction.isCommand()) return


            this.commands.forEach(command => {
                if (interaction.commandName == command.name) {
                    command.run(interaction)
                }
            })
        });
    }
}

export default CommandListenner