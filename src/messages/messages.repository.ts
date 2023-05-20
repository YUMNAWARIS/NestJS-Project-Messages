import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";


@Injectable()
export class MessageRepository{

    async findAll () {
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)

        return messages;
    }

    async findOne (id: string ){
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)

        return messages[id];
    }

    async create (content : string){
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)

        const id = Math.floor(Math.random()*978)
        messages[id] = {id,content}

        await writeFile( 'messages.json',JSON.stringify(messages))
        return [id];
    }
}