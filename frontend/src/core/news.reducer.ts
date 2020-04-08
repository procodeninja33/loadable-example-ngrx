import { NewActionsUnion, NewsActionsTypes } from './news.actions';

export interface News extends Loadable {
  entities: string[];
}

export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export function createDefaultNews(): News {
  return {
    loading: false,
    success: false,
    error: null,
    entities: []
  };
}

export function newsReducer(state = createDefaultNews(), action: NewActionsUnion): News {
  switch (action.type) {
    case NewsActionsTypes.Load:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    case NewsActionsTypes.LoadSuccess:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        entities: action.payload.entities
      }
    case NewsActionsTypes.LoadError:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      }
    default:
      return state;
  }
}
