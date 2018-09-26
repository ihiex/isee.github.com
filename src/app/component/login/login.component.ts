import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  test:string = "123333";
  constructor() { }

  ngOnInit() {
    $('body').css('backgroundColor','red');

  }
  getText(){
    console.log(this.test);
   }

}
