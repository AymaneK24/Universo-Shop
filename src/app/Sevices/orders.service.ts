import { inject, Injectable } from '@angular/core';
import { Order } from '../Modules/Order';
import { BehaviorSubject } from 'rxjs';
import { Panieritem } from '../Modules/PanierItem';
import { PanierService } from './panier.service';
import {Firestore , collection, addDoc, collectionData,doc,updateDoc,getDoc,deleteDoc} from '@angular/fire/firestore'
import { AuthService } from '../auth.service';
import { query, where} from '@angular/fire/firestore';
import { switchMap, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orderSubject = new BehaviorSubject<Order[]>([]);

  constructor(private panier : PanierService, private authService : AuthService) { }
  fireStore = inject(Firestore);
  
  allOrders : Order[] = [];

  cart : Panieritem[] = [];


  async createCommande(L: Panieritem[], totale: number) {
    
    const plainDetails = L.map(item => ({
      productId: item.produit.id, 
      productName: item.produit.title,  
      quantity: item.qte 
    }));
    const userId = await this.authService.getUserId();
  
    const commandeData = {
      userid: userId ,  
      montant: totale,
      dateCommande: new Date(),
      details: plainDetails, 
    };
  
    console.log(commandeData);
  
    const collectionInstance = collection(this.fireStore, 'orders');
    await addDoc(collectionInstance, commandeData)
      .then(() => console.log("Commande created successfully!", commandeData))
      .catch((error) => console.error("Error creating commande:", error));
  }
  
  

  getCurrentCart(){
    this.panier.getAllCartProducts().subscribe(data => {
      this.cart = data; 
    });
  }

  deleteOrder(id:string){
    const docinstance = doc(this.fireStore,'orders',id)
    deleteDoc(docinstance)
    .then(()=>console.log('data deleted !'))
    .catch(error=>console.log(error))
  }

  getAllOrdersByUserId(): Observable<any[]> {
    return from(this.authService.getUserId()).pipe(
      switchMap((userId) => {
        if (!userId) {
          console.error("User ID is not available");
          return of([]);
        }
  
        const collectionInstance = collection(this.fireStore, 'orders');
        const userOrdersQuery = query(collectionInstance, where('userid', '==', userId));
        return collectionData(userOrdersQuery, { idField: 'id' });
      }),
      catchError((error) => {
        console.error("Error fetching orders:", error);
        return of([]); // Return an empty array in case of an error
      })
    );
  }

}
