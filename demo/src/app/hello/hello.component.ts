
import { Component, OnInit } from '@angular/core';
import { HelloData } from '../data/hello-data';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  [x: string]: any;
  hello!: String;
  ownerName = "";
  password = "";
  result = "";

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
  }

  connet() {
    this.result = this.ownerName + this.password;
  }

  /** 委託ApiService.getHello()取得內容 */
  getHello() {
    this['apiService'].getHello().subscribe(
      (value: HelloData) => this.success(value)
    );

  }
  /** API呼叫成功的處理 */
  success(value: HelloData) {
    this.hello = value.message;
    console.log(value.message);
  }

  /** 清除頁面{{hello}}內容 */
  clear() {
    this.hello = '';
  }

}
