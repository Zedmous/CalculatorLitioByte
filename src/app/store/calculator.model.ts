export class CalculatorsStateModel {
    calculators: Calculators[];
}
export interface Calculators{
    id:string;
    totalPersonas:number;
    porctPropina:number;
    totalCuenta:number;
    propinaPersona:number;
    propinaTotal:number;
    totalPT:number;
}