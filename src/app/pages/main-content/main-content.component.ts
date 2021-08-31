import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Calculator } from 'src/app/core/interfaces/calculator'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit,OnDestroy {


   
  totalPersonas:number=0;
  porctPropina:number=0;
  totalCuenta:number=0.0;
  propinaPersona:number=0.0;
  propinaTotal:number=0.0;
  totalPT:number=0.0;

  formulario:FormGroup;

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
 

  constructor(
    private fb:FormBuilder,
    private toastr: ToastrService
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
    this.limpiarEntrada();
    this.limpiarSalidad();
    this.formulario.setValue({
      txtingresep:null,
      txtnumPersons:null,
      txttotalAccount:null
    });
  }

  calcular(){
    //leyendo porcentaje
    this.leerPorc(this.formulario.get('txtingresep')?.value)
    if(this.validaciones()==true){
      this.totalPersonas=this.formulario.get('txtnumPersons')?.value,
      this.totalCuenta=this.formulario.get('txttotalAccount')?.value
      console.log("Propina por persona", this.calcularPropinaPorPersona());
      console.log("Propina Total", this.calcularPropina());
      console.log("Cuenta + Propina", this.totalPT);
      let propinaPersona:number=this.calcularPropinaPorPersona();
      let propinaTotal:number=this.calcularPropina();
      let totalPT:number=this.calcularPropina()+this.totalCuenta;
      this.propinaPersona=this.redondear(propinaPersona);
      this.propinaTotal=this.redondear(propinaTotal);
      this.totalPT=this.redondear(totalPT);
    }else{
      this.limpiarSalidad();
    }
    
    
  }
  redondear(numero:number) {
    return  parseFloat(Number.parseFloat(numero.toString()).toFixed(2));
  }
  limpiarEntrada(){
    this.totalPersonas=0;
    this.porctPropina=0;
    this.totalCuenta=0;
  }
  limpiarSalidad(){
    this.propinaPersona=0.0;
    this.propinaTotal=0.0;
    this.totalPT=0.0;
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
