import { render } from '@testing-library/react';
import React from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                const { isLoggedIn, changeAuthStatus } = context
                const message = isLoggedIn ? 'Logged In' : 'Logged out';
                return (
                    <ThemeContext.Consumer>
                        {(context) => {
                            console.log(context);
                            const { isDarkTheme, darkTheme, lightTheme } = context;
                            const theme = isDarkTheme ? darkTheme : lightTheme;
                            return (
                                <nav style={{ background: theme.background, color: theme.text }}>
                                    <h2 className='ui centered header' style={{ textAlign: 'center' }}>My ToDo List</h2>
                                    <p onClick={ changeAuthStatus } style={{ textAlign: 'center' }}>{ message } - Click to change auth state</p>
                                    <div className='ui three buttons'>
                                        <button className='ui button'>Overview</button>
                                        <button className='ui button'>Support</button>
                                        <button className='ui button'>Contact</button>
                                    </div>
                                </nav>
                            )
                        }}
                    </ThemeContext.Consumer>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default Navbar