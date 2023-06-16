import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloData } from '../data/hello-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urllogin = 'http://localhost:8091/login';
  private rootUrl = 'http://localhost:8091/';

  constructor(
    private http: HttpClient
  ) { }
  getPosts(account: String, password: String) {
    let headers = new HttpHeaders({
      'Content-Tpye': 'application/json',
      'response-Type': 'json'
    });
    let option = {
      headers
    };
    let parmas = {
      'account': account,
      'password': password
    };
    return this.http.post<any>(this.urllogin, parmas, option);
  }
  getHello() {
    var ownerName = "steve";
    var hellomeaasge = this.http.get<HelloData>('http://localhost:8091/hello?ownerName=' + ownerName)
    return hellomeaasge;// 呼叫Spring Boot的DemoController.getHello()
  }

  // getBearer(token: String, webUrl: String): Observable<APIRe> {
  // }



}
