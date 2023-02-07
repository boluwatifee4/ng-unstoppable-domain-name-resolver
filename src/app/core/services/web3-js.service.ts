import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
declare let require: any;
const Web3 = require('web3');
@Injectable({
  providedIn: 'root'
})
export class Web3JsService {

  public web3: any;
  public ready = false;

  public accountsObservable = new BehaviorSubject("");
  public transaction$ = new BehaviorSubject(null)

  constructor() {
    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
   }


   async getTransactionCounts(addr:string) : Promise<Observable<any>> {
    await this.web3.eth.getTransactionCount(addr)
    .then((val:any) =>{
      // console.log("val", val);
      this.transaction$.next(val)
    })

    return this.transaction$;
   }

   async getBalance(addr:string) : Promise<Observable<any>> {
      let bal = await this.web3.eth.getBalance(addr)
      .then((val:any) =>{
        // console.log("val", val)
        this.accountsObservable.next(val)
      })
      
      return this.accountsObservable;
   }
 
}
