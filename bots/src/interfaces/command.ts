import { CommandInteraction } from "discord.js"

export default interface Commands {
    name: string
    description: string
    run: (interaction: CommandInteraction) => void
}