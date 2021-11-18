import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //States
  StateAuthUser:boolean = false;

  //Form reactivo
  FormVuelosLogin: FormGroup;

  //login test
  emailInput: String = "admin@admin.com";
  passInput: String = "admin";

  constructor(private FormVuelosBuilder: FormBuilder, private RouterNavigation: Router) {

    this.FormVuelosLogin = this.FormVuelosBuilder.group({

      FormInputEmail: ['', Validators.required],
      FormInputPassword: ['', Validators.required]

    })


  }


  AuthorizeUser() {
    this.StateAuthUser = false;

    if (this.FormVuelosLogin.get('FormInputEmail')?.value === "admin@admin.com" && this.FormVuelosLogin.get('FormInputPassword')?.value === "admin") {

      this.RouterNavigation.navigateByUrl("/Home-Travelers");

     

    }else{

      this.StateAuthUser = true;

    }



  }

  ngOnInit() {
  }

}
