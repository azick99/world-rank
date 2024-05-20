import { ActionTypes } from './rankingActionTypes'

type Action = {
  type: string
  payload?: number 
}

type State = {
  count: number
}

export const reducer = (state: State, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.INCREMENT:
      return {...state, count: state.count + 1}
    default:
      return state
  }
}
