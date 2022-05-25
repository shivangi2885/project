import {Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  p1:string[]=["dazler","kajal","bla bla "]
  p2:string[]=["eyetex","bindi","bli bli "]

  p3={
    name:'yardley',
    item:'perfume',
    seller:'nyka'}
 
    getP1(){
      console.log(this.p1);
      return this.p1;
    }
    getP2(){
      return this.p2;
    }
    getP3(){
      console.log(this.p3)
      return this.p3;
    }

    getDataFromWebApi()
{
   return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
}

  }


