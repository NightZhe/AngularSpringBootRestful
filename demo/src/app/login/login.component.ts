
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "登入"
  account = new FormControl('', [Validators.required, Validators.maxLength(10)]) //驗證數字需大於10
  password = new FormControl('', [Validators.required, Validators.maxLength(5)])  //驗證數字需要大於5

  posts: any;
  params: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  doLogin() {
    console.log("account Value: " + this.account.value + "/" + "accound Status: " + this.account.status);
    console.log("password Value: " + this.password.value + "/" + "password Status: " + this.password.status);

    this.params = {
      'account': this.account.value,
      'password': this.password.value
    }

    this.apiService.getPosts(this.account.value!, this.password.value!).subscribe(
      (response) => {
        this.posts = response;
        console.log(response);
        this.router.navigate(['index', response]); //跳轉到index
      },
      (error) => { console.log(error); }
    );

  }
}
