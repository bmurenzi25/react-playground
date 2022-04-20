import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class TodoList extends React.Component {
    static contextType = ThemeContext;
    render () {
        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
          <div className='ui list' style={{ background: theme.background, color: theme.text, height: '160px', textAlign: 'center' }}>
              <p className='item'>Plan for vacation</p>
              <p className='item'>Dinner with friends</p>
              <p className='item'>Send Mail to HR</p>
              <button className='ui button primary' onClick={ changeTheme }>Change Theme</button>
          </div>
        )
    }
}

export default TodoList