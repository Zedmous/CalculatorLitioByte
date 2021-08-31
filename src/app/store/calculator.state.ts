import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CalculatorsStateModel } from './calculator.model';
import { AddCalculator, RemoveCalculator } from './calculator.actions';

@State({
  name: 'calculators',
  defaults: {
    posts: []
  }
})
export class PostsState {
  @Selector()
  static getCalculators(state:CalculatorsStateModel) { return state.calculators; }

  // Añade un nuevo post al estado
  @Action(AddCalculator)
  add({ getState, patchState }: StateContext<CalculatorsStateModel>, { payload }: AddCalculator) {
    const state = getState();
    patchState({
      calculators: [...state.calculators, payload]
    });
  }


  // Elimina un post del estado
  @Action(RemoveCalculator)
  remove({ getState, patchState }: StateContext<CalculatorsStateModel>, { payload }: RemoveCalculator) {
    patchState({
      calculators: getState().calculators.filter(calculator => calculator.id !== payload)
    });
  }
}