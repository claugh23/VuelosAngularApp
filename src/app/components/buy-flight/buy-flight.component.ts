import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { ComprasVueloModel } from 'src/app/Interfaces/CompraVuelos';
import { ComprasVuelosService } from 'src/app/Services/ComprasVuelos/compras-vuelos.service';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  RandomNumberSet: Number = 0;
  constructor(private APIComprasVuelos:ComprasVuelosService) { 
    
  }

  GetRandomId() {
    this.RandomNumberSet = (Math.random() * 100000);
    
    return this.RandomNumberSet;
  }

  GenerarPago(){
    this.GetRandomId();

    const compraVuelo: ComprasVueloModel ={
      
      precio:750,
      aeroLinea:"Delta Airlines",
      estadoVuelo:"Activo",
      horaSalida:"15:30 am",
      horaLlegada:"17:55 am",
      puertaAbordaje:"Puerta A"

    }

    render({
      id:"#paypalrefButton",
      currency:"USD",
      value:compraVuelo.precio.toString(),
      onApprove:(details) => {
        
        this.APIComprasVuelos.PostComprasVuelos(compraVuelo).subscribe((result) => {

         
        },(error:HttpErrorResponse) =>{

          if(error.status != 200){
            alert(JSON.stringify(error.error))
          }
        })


      }
    })
  }

  ngOnInit() {

    this.GenerarPago();
   
  }

}
