import Bot from './classes/bot'
import { config } from 'dotenv'
import Rest from './classes/rest';
import Commands from './commnads';
import commands from '../src/interfaces/command'
import CommandListenner from './classes/CommandListenner';

config();

const init = () => {


    if (process.env.TOKEN) {
        console.log("O Token não foi encontrado!")
    }

    if (process.env.CLIENT_ID) {
        console.log("O CLIENT_ID não foi encontrado!")
    }
    const bot = new Bot(process.env.TOKEN);
    const rest = new Rest(process.env.TOKEN, process.env.CLIENT_ID);
    const commands = new CommandListenner(Commands)
    rest.start()
    rest.registerCommand(Commands)
    bot.start()
}


init();

