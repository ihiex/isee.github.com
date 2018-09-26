import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public verCode:string = '';
  public phone:string = '';
  public message:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
   let that = this;
    $('#cell-phoneNumber').focusin(function(){
      that.message = '';
    });
    $('#cell-phoneNumber').focusout(function(){
      if(that.phone === ""){
        that.message = "手机号不能为空";
      }else  if(that.phone.length !== 11){
        that.message = "您输入的手机号有误！将无法获取验证码";
      }
    });

    // 失去焦点时去服务器判断验证码
    $('#verificationCode').focusout(function(){
      if(that.verCode === ""){
        that.message = "请输入验证码";
      }

    });
  }
  goResetPassword(){
    //再次去服务器验证验证码
    if(this.phone != "" && this.verCode.length != 0 && this.message === ""){


      //服务器返回成功后跳转
      this.router.navigate(['/resetPasswords/'+this.phone]);
    }
  }


  getVerificationCode(){
    if(this.message === "" && this.phone.length != 0){
      this.message = "";
      let time = 60;
      let times = setInterval(function () {
        time--;
        $('#verCodeBtn').html(time + 's后再次获取').attr('disabled', "true").css('backgroundColor', "#999");
        if (time == 0) {
          clearInterval(times);
          $('#verCodeBtn').html('获取验证码').css('backgroundColor', "#7dbf1d").removeAttr('disabled');
        }
      }, 1000);
    }
  }
}
