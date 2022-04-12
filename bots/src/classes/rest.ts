import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import Command from "../interfaces/command";

class Rest {
    private rest: REST
    private commands: Command[] = [];
    constructor(private token: string, private clientId: string) {
        this.rest = new REST({ version: "9" }).setToken(this.token)
    }

    registerCommand(command: Command[]) {
        this.commands = command
    }

    async start() {
        try {
            console.log("Recarregamento os comandos de barra...")
            await this.rest.put(Routes.applicationCommands(this.clientId), {
                body: this.commands.map((command) => {
                    const data = new SlashCommandBuilder()
                        .setName(command.name.toLocaleLowerCase())
                        .setDescription(command.description)
                    return data.toJSON()
                })
            })
            console.log("Os comandos de barra aplicação foram recarregados com sucesso!")
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default Rest;