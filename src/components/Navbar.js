import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <h2 className='ui centered header'>My ToDo List</h2>
        <div className='ui three buttons'>
            <button className='ui button'>Overview</button>
            <button className='ui button'>Support</button>
            <button className='ui button'>Contact</button>
        </div>
    </nav>
  )
}

export default Navbar