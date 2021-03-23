import { SET_VALUES } from './types'

export const reducer = (state, action) => {
  switch(action.type) {
    case SET_VALUES:
      return {
        result: {
          name: 'Fulano'
        }
      }
    default:
      return state
  }
}