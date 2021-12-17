import { Component, OnInit } from '@angular/core';
import { CreateUserModel } from 'src/app/Interfaces/CrearUsuario';
import { UsuarioModel } from 'src/app/Interfaces/Usuario';
import { CrearUsuarioServiceService } from 'src/app/Services/CrearUsuario/crear-usuario-service.service';
import { UsuarioServiceService } from 'src/app/Services/Usuario/usuario-service.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  ListaUsers:CreateUserModel[]=[];

  constructor(private ApiUsers:CrearUsuarioServiceService) { }


  CargarUsuarios(){
    this.ApiUsers.GetCrearUsuarioAll().subscribe((result:any) => {
      this.ListaUsers = result;
    })
  }
  ngOnInit() {
    this.CargarUsuarios();

  }

}
