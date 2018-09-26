import { Component } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iSeeWeb';
  constructor(private router:Router) { }

  goHome(){
    this.router.navigate(['/home']);
    $('.head-content li:last-child').removeClass('active');
    $('.head-content li:first-child').addClass('active');
  }
  goRegister(){
    this.router.navigate(['/register']);
    $('.head-content li:first-child').removeClass('active');
    $('.head-content li:last-child').addClass('active');
    $(window).scrollTop(0);
  }
}
