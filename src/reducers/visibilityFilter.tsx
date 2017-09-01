import {SHOW_FILTER, ACTIONS} from '../utils/global'

const visibilityFilter = (state = SHOW_FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
