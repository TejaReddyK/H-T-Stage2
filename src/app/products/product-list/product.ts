export enum Category {
    fruits = 'fruits', flowers = 'flowers', vegetables = 'vegetables', pulses = 'pulses', cereals = 'cereals',
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