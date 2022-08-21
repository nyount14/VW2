import { Purchase } from "../models/purchase.model";
import { Envelope } from "../models/envelope.model";
import { PaymentMethod } from "../models/paymentmethod.model";
import { Subject } from "rxjs";


export class PurchasesService {

  purchasesChanged = new Subject<Purchase[]>();
  private purchases: Purchase[] = [
    {
      amount: 30,
      category: 'Food',
      date: '1/1/2022',
      description: 'publix lunch',
      paymentmethod: 'cash'
    },
    {
      amount: 30,
      category: 'Fun',
      date: '1/1/2022',
      description: 'movie',
      paymentmethod: 'cash'
    },
    {
      amount: 30,
      category: 'Fuel',
      date: '1/1/2022',
      description: 'mapco',
      paymentmethod: 'cash'
    },
  ]

 getPurchases() {
  return this.purchases.slice();
 }

 getPurchase(index: number){
  return this.purchases[index]
 }

 getPurchasesByCategory(category: string) {
  return this.purchases[category]
 }

 addPurchase(purchase: Purchase){
  this.purchases.push(purchase);
  this.purchasesChanged.next(this.purchases.slice());
 }

}