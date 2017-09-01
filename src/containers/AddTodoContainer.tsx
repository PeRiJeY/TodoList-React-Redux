import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
        dispatch(addTodo(input.value))
        input.value = ''
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
