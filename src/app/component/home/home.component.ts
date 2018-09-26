import { Component, OnInit,NgZone } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private ngzone:NgZone) { }

  ngOnInit() {
    $(window).scroll(function () {
     let y = $(this.window).scrollTop();
     if(y >= 500 && y <= 1000){
      $("#homeAbout_iSee").addClass("animated lightSpeedIn ");
      $('#homeAbout_iSee_title').addClass('animated bounceInLeft');
     }else if( y >= 2400 && y <= 2800){
      $("#homeServeSuperiority").addClass("animated flipInX ");
     }
     if(y >= 3000 && y <= 3500){
      $('.success-case').addClass('animated slideInUp');
     }
     if(y < 500 || y > 1000){
       $("#homeAbout_iSee").removeClass("animated lightSpeedIn");
       $('#homeAbout_iSee_title').removeClass('animated bounceInLeft');
     }
     if(y < 2500 || y > 3000){
       $("#homeServeSuperiority").removeClass("animated flipInX");
     }
     if(y < 3000 || y > 3500){
      $('.success-case').removeClass('animated slideInUp');
     }
    });
    let that = this;
    that.ngzone.run(function(){
      $('.head-content li:last-child').removeClass('active');
      $('.head-content li:first-child').addClass('active');
    });
  }
  enterFun(id){
    $('#'+id).addClass('animated bounce ');
  }
  leaveFun(id){
    $('#'+id).removeClass('animated bounce ');
  }

  goRegister(){
    this.router.navigate(['/register']);
    $('.head-content li:first-child').removeClass('active');
    $('.head-content li:last-child').addClass('active');
    $(window).scrollTop(0);
  }
}
