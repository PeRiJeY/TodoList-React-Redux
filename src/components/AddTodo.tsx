import * as React from 'react'

const AddTodo = ({onSubmit}) => {
  let input

  return (
    <div className="todolist-add-container">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmit(input)
        }}
      >
          <div className="row">
            <div className="col-12 col-md-10">
              <input className="form-control"
                ref={node => {
                  input = node
                }}
              />
            </div>
            <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary btn-block">
                    Add Todo
                </button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default AddTodo
