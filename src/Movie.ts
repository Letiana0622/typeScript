import Buyable2 from "./Buyable2";

export default class Movie implements Buyable2 {

    constructor (
        readonly id: number, 
        readonly name: string,
        readonly nameEn: string, 
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string [],
        readonly time: string,
        readonly price: number, 
        ) {
        
    }

}