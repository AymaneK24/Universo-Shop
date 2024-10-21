import { Dimension } from "./Dimension";
import { Review } from "./Review";

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    reviews !: Review[];
    dimensions !: Dimension;
    sku!: string;
    stock: number;
    tags: string[];
    brand!: string;
    images: string[];
    returnPolicy !: string;
   weight !: number
  
    constructor(
      id: number,
      title: string,
      description: string,
      category: string,
      price: number,
      discountPercentage: number,
      rating: number,
      dimention : Dimension,
      stock: number,
      tags: string[],
      weight : number,
      brand: string,
      sku: string,
      images: string[],
      reviews : Review[],
      returnPolicy : string
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.price = price;
      this.discountPercentage = discountPercentage;
      this.rating = rating;
      this.stock = stock;
      this.tags = tags;
      this.sku=sku;
      this.weight = weight;
      this.returnPolicy = returnPolicy;


      this.brand = brand;
      this.dimensions =  dimention ;
      this.images = images;
      this.reviews=reviews
    }
  }
  