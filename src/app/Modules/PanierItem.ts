import { Product } from "./Product";

export class Panieritem {
    id?:string;
    produit! : Product;
    qte : number =0 ;
    constructor(prod : Product,qte : number)
    {
        this.produit = prod;
        this.qte = qte;
       
    }
}
