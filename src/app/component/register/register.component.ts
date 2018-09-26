import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpServiceService } from '../../service/http-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public phone: string = '';
  public psw: string = '';
  public verCode: string = '';
  public linkMan: string = '';
  public message: string = '';

  constructor(private router: Router,
    private http: HttpServiceService) { }

  ngOnInit() {
    let that = this;
    $('#cell-phoneNumber').focusin(function () {
      that.message = '';
    });
    $('#cell-phoneNumber').focusout(function () {
      if(that.phone === ""){
        that.message = '手机号不能为空';
      }else if (that.phone.length !== 11) {
        that.message = '您输入的手机号有误！无法获取验证码';
      }
    });
    $('#exampleInputPassword1').focusin(function () {
      that.psw = '';
    });
    $('#exampleInputPassword1').focusout(function () {
      let len = that.psw.length;
      if(that.psw === ""){
        that.message = "密码不能为空";
      }else if (len < 6 || len > 16) {
        that.message = "请输入6~16位的密码";
      }
    });

    //失去焦点时去服务器验证验证码
    $('#verificationCode').focusout(function () {
      if(that.verCode === ""){
        that.message = "请输入验证码";
      }
    });
  }

  // 修改密码
  goChangePasswords() {
    this.router.navigate(['/changePassword']);
  }

  //获取验证码disabled=ture
  getVerificationCode() {
    if (this.message === "" && this.phone.length !== 0) {
      this.message = '';
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

  // 下一步
  nextFun() {
    //提交数据
    if (this.message === '' && this.phone != "" && this.psw != "" && this.verCode != "") {


    }
    //后台返回处理结果

    //成功跳转到成功页面
    this.router.navigate(['/registerSuccessfully/' + this.phone]);
    $(window).scrollTop(0);
  }

  // post上传数据
  uploadDataPost(data: any, func: Function) {
    let url = '';
    // this.http.apiPost(a,b,b);
  }



}
