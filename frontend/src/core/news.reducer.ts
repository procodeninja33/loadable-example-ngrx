// import { createDefaultLoadable, Loadable } from '../loadable/loadable';
import { NewActionsUnion, NewsActionsTypes } from './news.actions';

export interface News extends Loadable {
  entities: string[];
}

export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export function createDefaultLoadable(): Loadable {
  return {
    loading: false,
    success: false,
    error: null,
  };
}

export function createDefaultNews(): News {
  return {
    ...createDefaultLoadable(),
    entities: []
  };
}

export function newsReducer(state = createDefaultNews(), action: NewActionsUnion): News {
  switch (action.type) {
    case NewsActionsTypes.Load:
      let state1 = {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
      return state1;
    case NewsActionsTypes.LoadSuccess:
      let state2 = {
        ...state,
        loading: false,
        success: true,
        error: null,
        entities: action.payload.entities
      }
      return state2;
    case NewsActionsTypes.LoadError:
      let state3 = {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      }
      return state3;
    default:
      return state;
  }
}
