export enum Categories{
    All="all",
    Animal="animal",
    Cosmetics="cosmetic",
    Clothing="clothing",
    Furniture="furniture"
};

export interface IProduct{
    id:number ,
    name:string,
    price:number,
    image: string,
    category: Categories ,
    rating: number
}