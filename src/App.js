import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import './App.css'
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCharacters = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters`)
            setItems(result.data)
            setIsLoading(false)
        }
        fetchCharacters()
    }, [])
    return (
        <div className='container'>
            <Header />
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default App