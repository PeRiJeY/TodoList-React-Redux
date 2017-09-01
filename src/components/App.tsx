import * as React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'

require('../scss/todo-list.scss');

const App = () => (
  <div className="todolist-container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
