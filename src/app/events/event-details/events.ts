import { ISession } from "./sessions"

export interface IEvent{
    
    id: number,
    name:string,
    date: string,
    time: string,
    price:number,
    imageUrl: string,
    location:{
        address:string,
        city: string,
        country:string
    },
    sessions: ISession[]
    
}