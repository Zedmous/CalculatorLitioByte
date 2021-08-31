import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CalculatorService } from 'src/app/core/services/calculator.service';
import { Calculator } from 'src/app/core/interfaces/calculator'
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  ngOnInit(): void {
  }

  totalPersonas:number=0;
  porctPropina:number=0;
  totalCuenta:number=0.0;
  propinaPersona:number=0.0;
  propinaTotal:number=0.0;

  formulario:FormGroup;

  constructor(
    private fb:FormBuilder,
    private toastr: ToastrService,
    private calculatorServices:CalculatorService
  ) {
    this.formulario=this.fb.group({
      txtnumPersons:['',Validators.required],
      txttotalAccount:['',Validators.required],
      txtingresep:['',Validators.required]
    });
  }

  calcularPropina(){
    if(this.totalPersonas==0){
      return 0.0;
    }else{
      return (this.totalCuenta*this.porctPropina/100);
    }
  }

  calcularPropinaPorPersona(){
    if(this.totalPersonas==0){
      return 0.0;
    }else{
      return this.calcularPropina()/this.totalPersonas;
    }
  }

  leerPorc(porct:number){
    this.porctPropina=porct;
    this.formulario.setValue({
      txtingresep:porct,
      txtnumPersons:this.formulario.get('txtnumPersons')?.value,
      txttotalAccount:this.formulario.get('txttotalAccount')?.value
    });
  }

  limpiar(){
    this.totalPersonas=0;
    this.porctPropina=0;
    this.totalCuenta=0;
    this.propinaPersona=0.0;
    this.propinaTotal=0.0;
  }

  calcular(){
    //leyendo porcentaje
    this.leerPorc(this.formulario.get('txtingresep')?.value)
    //leyendo cantidad de personas
    if(this.validaciones()==true){
      this.totalPersonas=this.formulario.get('txtnumPersons')?.value,
      this.totalCuenta=this.formulario.get('txttotalAccount')?.value
      console.log("Propina por persona", this.calcularPropinaPorPersona());
      console.log("Propina Total", this.calcularPropina());
      let total=this.calcularPropina()+this.totalCuenta;
      console.log("Cuenta + Propina", total);
      const DATOS:Calculator={
        totalPersonas:this.formulario.get('txtnumPersons')?.value,
        porctPropina:this.formulario.get('txtingresep')?.value/100,
        totalCuenta:this.formulario.get('txttotalAccount')?.value,
        propinaPersona:this.calcularPropinaPorPersona(),
        propinaTotal:this.calcularPropina(),
        totalPT:total
      };
      this.calculatorServices.calcular(DATOS);
    }
    
    
  }

  validaciones(){
    let valido=false;
    if(this.formulario.get('txttotalAccount')?.hasError('required')==true){
      this.toastr.error('El total de la cuenta es requerido','¡Ingrese un monto para el total de la cuenta!');
    }else if(this.formulario.get('txttotalAccount')?.value<=0){
      this.toastr.error('El total de la cuenta es invalido','¡Ingrese un monto para el total de la cuenta positivo!');
    }else if(this.formulario.get('txtnumPersons')?.hasError('required')==true){
      this.toastr.error('El número de personas es requerido','¡Ingrese un número de personas!');
    }else if(this.formulario.get('txtnumPersons')?.value<=0){
      this.toastr.error('El número de personas es requerido','¡Ingrese un número de personas positivo, mayor a 0!');
    }else{
      valido=true;
    }
    return valido;
  }
}
