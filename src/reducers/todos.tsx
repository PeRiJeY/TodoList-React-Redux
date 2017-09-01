import {ACTIONS} from '../utils/global'

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ]
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
