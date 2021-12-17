import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserModel } from 'src/app/Interfaces/CrearUsuario';
import { CrearUsuarioServiceService } from 'src/app/Services/CrearUsuario/crear-usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //States
  StateAuthUser: boolean = false;

  //Form reactivo
  FormVuelosLogin: FormGroup;

  //login test
  ResponseAuth: string = "";


  constructor(private FormVuelosBuilder: FormBuilder, private RouterNavigation: Router, private APICrearUsuario: CrearUsuarioServiceService) {

    this.FormVuelosLogin = this.FormVuelosBuilder.group({

      FormInputEmail: ['', Validators.required],
      FormInputPassword: ['', Validators.required]

    })


  }


  AuthorizeUser() {


    const credenciales: CreateUserModel = {
      email: this.FormVuelosLogin.get('FormInputEmail')?.value,
      password: this.FormVuelosLogin.get('FormInputPassword')?.value,
      apellidos: "",
      confPassword: "",
      idUsuario: "",
      nombre: "",
      usuario: "",
      tipoUsuario_IdtiposUsuario: ""
    }

    this.APICrearUsuario.PostAuthenticateUser(credenciales).subscribe((result: any) => {

      this.ResponseAuth = result;
     

    }, (responseCode: HttpErrorResponse) => {

      if (responseCode.status === 200) {

        this.ResponseAuth = responseCode.error.text
       

        if (this.ResponseAuth === "Usuario Incorrecto") {
          this.StateAuthUser = true;
        } else if (this.ResponseAuth === "Autenticado") {
          this.StateAuthUser = false;
          this.RouterNavigation.navigateByUrl('Home-Travelers');
        }
      }


    })


  }

  ngOnInit() {


  }

}
