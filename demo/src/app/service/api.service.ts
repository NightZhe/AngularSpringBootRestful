import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloData } from '../data/hello-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  getHello() {
    return this.http.get<HelloData>('http://localhost:8091/hello');// 呼叫Spring Boot的DemoController.getHello()
  }



}
