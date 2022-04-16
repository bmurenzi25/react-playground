import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
      setText(q)
      getQuery(q)
  }
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder='Search character'
          className='form-control'
        />
      </form>
    </section>
  );
};

export default Search;
