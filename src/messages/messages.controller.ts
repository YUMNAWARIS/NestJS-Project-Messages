import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create_message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
    
    constructor(public messageService:MessageService){
    }
    @Get()
    listAllMessages() {
        return this.messageService.findAll()
    }

    @Post()
    craeteMessage(@Body() body: CreateMessageDto) {
        return this.messageService.create(body.content)
    }

    @Get('/:id')
    async getMessageById(@Param('id') id : string) {
        const messages = await this.messageService.findOne(id)
        if(!messages) {
            return new NotFoundException("Message with provided ID not found. please try a valid ID")
        }
        return messages
    }
}
