import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUserModel } from 'src/app/Interfaces/CrearUsuario';
import { CrearUsuarioServiceService } from 'src/app/Services/CrearUsuario/crear-usuario-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FormCrearUsuario: FormGroup;

  RandomNumberSet: string = "";

  constructor(private builderForm: FormBuilder, private ApiCrearUsuario: CrearUsuarioServiceService) {

    this.FormCrearUsuario = this.builderForm.group({
      NameForm: new FormControl('', Validators.required),
      LastNameForm: new FormControl('', Validators.required),
      EmailForm: new FormControl('', Validators.required),
      UserNameForm: new FormControl('', Validators.required),
      PasswordForm: new FormControl('', Validators.required),
      ConfirmPassForm: new FormControl('', Validators.required)
    })


  }

  GetRandomId() {
    this.RandomNumberSet = (Math.random() * 10000).toPrecision(4);
    console.log(this.RandomNumberSet);
    

    return this.RandomNumberSet;
  }

  RegistrarUsuario() {
    this.GetRandomId();

    const crearUsuario: CreateUserModel = {
      IdUsuario: this.RandomNumberSet,
      Nombre: this.FormCrearUsuario.get('NameForm')?.value,
      Apellidos: this.FormCrearUsuario.get('LastNameForm')?.value,
      Email: this.FormCrearUsuario.get('EmailForm')?.value,
      Usuario: this.FormCrearUsuario.get('UserNameForm')?.value,
      Password: this.FormCrearUsuario.get('PasswordForm')?.value,
      ConfPassword: this.FormCrearUsuario.get('ConfirmPassForm')?.value,
      TipoUsuario_IdtiposUsuario: "1"

    }

    this.ApiCrearUsuario.PostCrearUsuario(crearUsuario).subscribe((result: any) => {

      alert("Usuario Creado");


    }, (error: HttpErrorResponse) => {

      if (error.status !== 200) {

        alert("OCURRIO UN ERROR AL GENERAR EL REGISTRO: " + JSON.stringify(error))
      }else{
        console.log("Registro Exitoso");
        
      }
    })
  }

  ngOnInit() {
  }

}
