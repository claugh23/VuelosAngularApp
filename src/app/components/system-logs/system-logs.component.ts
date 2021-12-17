import { Component, OnInit } from '@angular/core';
import { ErroresModel } from 'src/app/Interfaces/Erorres';
import { ErroresServiceService } from 'src/app/Services/Errores/errores-service.service';

@Component({
  selector: 'app-system-logs',
  templateUrl: './system-logs.component.html',
  styleUrls: ['./system-logs.component.css']
})
export class SystemLogsComponent implements OnInit {

  ListaErrores:ErroresModel[]=[]

  constructor(private APILogs:ErroresServiceService) { }


  LoadErrores(){

    this.APILogs.GetErroresAll().subscribe((result:any) => {

      this.ListaErrores = result;
    })

  }


  ngOnInit() {

    this.LoadErrores();
  }

}
