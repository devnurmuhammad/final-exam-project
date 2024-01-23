import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallMeService {
  httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http : HttpClient) { }

  postProduct(data: any)
  {
    return this.http.post<any>("https://localhost:7092/api/Recall/CreateRecall", data, this.httpOptions)
  }
}
