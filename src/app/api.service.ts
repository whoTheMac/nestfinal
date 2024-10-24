import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getDataById(id:any){
    return this.http.get("http://fakedtoreapi.com/products/"+id)
}}
