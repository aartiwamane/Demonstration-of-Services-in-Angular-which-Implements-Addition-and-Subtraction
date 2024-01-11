import { Injectable } from '@angular/core';
import { publicDecrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor()
  { }

 
  Add(No1:number,No2 : number) :number
  {
    return No1+No2;
  }

  Sub(No1 : number,No2:number) : number
  {
    return No1-No2;
  }
}
