import { Component, OnInit } from '@angular/core';
import { ComprasVueloModel } from 'src/app/Interfaces/CompraVuelos';
import { ComprasVuelosService } from 'src/app/Services/ComprasVuelos/compras-vuelos.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  ListaCompraVuelos:ComprasVueloModel[] = [];

  constructor(private APIComprasVuelos:ComprasVuelosService) { }


  CargarCompraVuelos(){

    this.APIComprasVuelos.GetComprasVuelosAll().subscribe((result:any) =>{

      this.ListaCompraVuelos = result;
    })

  }
  ngOnInit() {

    this.CargarCompraVuelos()
  }

}
