import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "adadwsew3232343434",
            name: "item 1",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "adadws2ddfg32343434",
            name: "item 2",
            qty: 500,
            description: "This is item two"
        }
    ]
}
