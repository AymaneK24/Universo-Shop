import { Panieritem } from "./PanierItem";

export class Order {
    orderid?:string;
    orderdate !: Date;
    productCart !: Panieritem[];
    
   
    constructor(prod :Panieritem[])
    {
        this.productCart = prod;
        this.orderdate= new Date();

    }
}
