import React from 'react'

class TodoList extends React.Component {
    render () {
        return (
          <div className='ui list'>
              <p className='item'>Plan for vacation</p>
              <p className='item'>Dinner with friends</p>
              <p className='item'>Send Mail to HR</p>
          </div>
        )
    }
}

export default TodoList