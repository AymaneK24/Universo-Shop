export class Review {
    rating!: number;
    comment!: string;
    date!: string;
    reviewerName!: string;
    reviewerEmail!: string;
    constructor(rating : number , comment : string , date : string , reviewerName : string , revieweEmail : string){
        this.comment = comment ,
        this.date=date,
        this.rating= rating,
        this.reviewerEmail=revieweEmail,
        this.reviewerName=reviewerName
    }
}