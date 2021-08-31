import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculatorService } from 'src/app/core/services/calculator.service';
import { Calculator } from 'src/app/core/interfaces/calculator'
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit,OnDestroy {

  
  totalPT:number=0.0;
  propinaPersona:number=0.0;
  propinaTotal:number=0.0;
  
  constructor(
    private calculatorServices:CalculatorService
    ) { 

    }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  limpiar(){
    const DATOS:Calculator={
      totalPersonas:0,
      porctPropina:0,
      totalCuenta:0.0,
      propinaPersona:0.0,
      propinaTotal:0.0,
      totalPT:0.0,
    };
    this.calculatorServices.calcular(DATOS);
    this.totalPT=33333.0;
    this.propinaPersona=0.0;
    this.propinaTotal=0.0;
  }
}
