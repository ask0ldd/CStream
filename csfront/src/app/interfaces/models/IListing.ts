import { IUser } from "./IUser"

export interface IListing{
    user : IUser
    categoryId : number
    title : string
    description : string
    price : number
    city : string
    // delivery type
    createdAt : Date
    modifiedAt : Date
}