export enum Category {
    animal = 'animals', fruits = 'fruits', flowers = 'flowers', vegetables = 'vegetables', pulses = 'pulses', cereals = 'cereals',
    wild = "wild",
    domestic = "domestic"
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
    qty:number;

}