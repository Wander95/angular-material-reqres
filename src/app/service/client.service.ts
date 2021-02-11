import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config'
import { Observable } from 'rxjs'
import { Client } from '../interface/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL = API_URL;
  constructor(private http: HttpClient) { }

  getClients():Observable<Object>{
    return this.http.get(this.URL)
  }

  getClient(id:string){
    this.http.get(`${this.URL}/${id}`,{responseType:'json'})
    .subscribe(
      data=>console.log('data', data),
      error=>console.log('error', error)
    )
  }
}
