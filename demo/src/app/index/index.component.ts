import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  result: any;

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {

  }

  getInfo() {
    // this['apiService'].getPosts().subscribe(

    // )
  }
}
