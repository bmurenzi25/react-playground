import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return (
    <section className='cards'>
      {isLoading ? (
        <Spinner />
      ) : (
        items.map((item) => <CharacterItem key={item.char_id} item={item} />)
      )}
    </section>
  );
};

export default CharacterGrid;
