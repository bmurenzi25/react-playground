import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading }) => {
  return (
    <section className='cards'>
        {isLoading ? 'Loading' : (
            items.map((item) => (
                <CharacterItem key={item.char_id} item={item} />
            ))
        )}
    </section>
  )
}

export default CharacterGrid