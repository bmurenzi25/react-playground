import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import './App.css'
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header'
import Search from './components/ui/Search';

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchCharacters = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            setItems(result.data)
            setIsLoading(false)
        }
        fetchCharacters()
    }, [query])
    return (
        <div className='container'>
            <Header />
            <Search getQuery={(q) => setQuery(q)}/>
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default App