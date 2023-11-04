import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User, UserDocument } from "./schemas/users.schema";
import { UserDto } from "./dto/users.dto";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }
    // public users: User[] = [];

    //add user
    create(userDto: UserDto): Promise<User> {
        return this.userModel.create(userDto);
    }

    //update User
    update(id: string, updatedData: UserDto): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updatedData, { new: true })
    }
    //delete User
    delete(id: string) {
        return this.userModel.deleteOne({ _id: id });
    }
    //find all users
    findAll(): Promise<User[]> {
        return this.userModel.find();
    }
    //find user by id
    findById(id: string): Promise<User | null> {
        return this.userModel.findById(id);
    }
}