import { LoginData } from '../data/login-data';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  resultAccount: any;
  resultPassword: any;
  resultMessane: any;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const self = this; // 保存对当前组件实例的引用
    $(document).ready(function () {
      self.getInfo();
    })
  }


  getInfo() {
    this['apiService'].getLoginInfo().subscribe(
      (value: LoginData) => this.success(value)
    )
  }

  success(value: LoginData) {
    this.resultAccount = value.account
    this.resultPassword = value.password
    this.resultMessane = value.message;
    console.log(value.message);
    console.log(value.account);
    console.log(value.password);

  }



}


