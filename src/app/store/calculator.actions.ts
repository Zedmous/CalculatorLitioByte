import { Calculators } from './calculator.model';
export class AddCalculator {
  static readonly type = '[CALCULATORS] Add';
  constructor( public payload: Calculators ) {}
}
export class RemoveCalculator {
  static readonly type = '[CALCULATORS] Remove';
  constructor( public payload: string ) {}
}