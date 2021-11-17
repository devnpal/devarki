import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  data2: any;
  apiData: any = [];

  myUrl1 = 'javascript:alert("hello")'
  myUrl = 'https://picsum.photos/200/300'

  obs:any;
  message: string = '';
  trustedURL: any;

  constructor(private _homeService: HomeService, private domsanitzier: DomSanitizer) {
    this.trustedURL = this.domsanitzier.bypassSecurityTrustUrl(this.myUrl);

   
   
  }

  ngOnInit(): void {

    this.getAllData();
   
  

  }

  

  getAllData() {
    this._homeService.getAllData().subscribe((res) => {
      //console.log(res);
      this.apiData = res;
    }, (error: HttpErrorResponse) => {
      //console.log(error );
      //console.log('error message from api');
      this.message = error.message;
    })
  }

  delete(data: any) {
    this.apiData =  this.apiData.filter((item: any) => item.id != data.id);
  }

  popuphello() {
    alert('hello body...!!')
  }

 


  

}
