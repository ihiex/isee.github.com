import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-register-successfully',
  templateUrl: './register-successfully.component.html',
  styleUrls: ['./register-successfully.component.css']
})
export class RegisterSuccessfullyComponent implements OnInit {

  public phone = "";

  constructor(private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(data=>this.phone = data.phone);
  }

}
