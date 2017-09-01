export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export const SHOW_FILTER = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

const DEFAULT_STATE = {
  todos: [
    {id: 0, text: 'Tarea 1', completed: false},
    {id: 1, text: 'Tarea 2', completed: false},
    {id: 2, text: 'Tarea 3', completed: true},
    {id: 3, text: 'Tarea 4', completed: false}
  ],
  visibilityFilter: SHOW_FILTER.SHOW_ALL
};

export const loadDefaultStatus = () => {
    return DEFAULT_STATE;
}