import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http : HttpClient) { }

  postProduct(data: any)
  {
    return this.http.post<any>("https://localhost:7092/api/Catalog/CreateCatalog", data, this.httpOptions)
  }

  // getProducts(){
  //   return this.http.get<any>("http://localhost:3000/productList")
  // }

  // putProduct(data: any, id: number){
  //   return this.http.put<any>("http://localhost:3000/productList/" + id, data)
  // }

  // deleteProduct(id: number){
  //   return this.http.delete<any>("http://localhost:3000/productList/" + id)
  // }
}
