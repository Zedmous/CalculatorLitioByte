import { Injectable } from '@angular/core';
import { Calculator } from 'src/app/core/interfaces/calculator';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculator:Calculator={
    totalPersonas:0,
    porctPropina:0,
    totalCuenta:0.0,
    propinaPersona:0.0,
    propinaTotal:0.0,
    totalPT:0.0,
  }

  
  constructor() {
    
  }

  calcular(calculator:Calculator){
    this.calculator=calculator;
    console.log(this.calculator);
  }

}
