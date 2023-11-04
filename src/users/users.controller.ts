import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";

import { UsersService } from "./users.service";
import { UserDto } from "./dto/users.dto";
import { User } from "./schemas/users.schema";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<User | null> {
        return this.usersService.findById(id);
    }
    @Post()
    async create(@Body() userdto: UserDto): Promise<User> {
        return this.usersService.create(userdto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatedData: UserDto): Promise<User | null> {
        return this.usersService.update(id, updatedData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

}