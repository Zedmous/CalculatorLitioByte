import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorLitioByte';

  totalPersonas:number=0;
  porctPropina:number=0;
  totalCuenta:number=0.0;
  propinaPersona:number=0.0;
  propinaTotal:number=0.0;

  formulario:FormGroup;

  constructor(
    private fb:FormBuilder
  ) {
    this.formulario=this.fb.group({
      txtnumPersons:['',Validators.required],
      txttotalAccount:['',Validators.required],
      txtI:['',Validators.required]
    });
  }

  calcularPropinaPorPersona(porct:number){
    if(this.totalPersonas==0){
      return 0.0;
    }else{
      return (this.totalCuenta*porct/100)/this.totalPersonas;
    }
  }
  leerPorc(porct:number){
    this.porctPropina=porct;
    this.formulario.setValue({
      txtI:0,
      txtnumPersons:this.totalPersonas,
      txttotalAccount:this.totalCuenta
    });
  }
  limpiar(){
    this.totalPersonas=0;
    this.porctPropina=0;
    this.totalCuenta=0;
    this.propinaPersona=0.0;
    this.propinaTotal=0.0;
  }





}
