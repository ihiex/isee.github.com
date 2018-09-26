import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-reset-passwords',
  templateUrl: './reset-passwords.component.html',
  styleUrls: ['./reset-passwords.component.css']
})
export class ResetPasswordsComponent implements OnInit {

  public phone:any = "";
  public pws:string = "";
  public pwsAgain:string = "";
  public message:string = "";

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let that = this;
    that.route.params.subscribe(data=> that.phone = data.phone);

    $('#exampleInputPassword1').focusin(function(){
      that.message = "";
    });
    $('#exampleInputPassword1').focusout(function(){
      let len = that.pws.length;
      if(that.pws === ""){
        that.message = "密码不能为空";
      }else if(len < 6 || len > 16){
        that.message = "请输入6~16位的密码!";
      };
    });
    $('#exampleInputPassword2').focusin(function(){
      that.message = "";
    });
    $('#exampleInputPassword2').focusout(function(){
      if(that.pws !== that.pwsAgain){
        that.message = "两次输入的密码不一致!";
      };
     });
  }

  finishFun(){
    if(this.message === "" && this.pws != ""){
      this.message = "";
      //提交数据到服务器

      //服务器返回成后跳转
      this.router.navigate(['/home']);
    }
  }
}
