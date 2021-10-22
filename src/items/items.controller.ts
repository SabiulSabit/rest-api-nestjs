import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`
    }

    @Post()
    create(@Body() craatItemDto: CreateItemDto): string {
        return `Name: ${craatItemDto.name} Desc: ${craatItemDto.description}`
    }
}
