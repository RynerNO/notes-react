import React, { useState } from 'react';
import SearchContext from '../../context/SearchContext';

function SearchProvider({ children }) {
  const [value, setValue] = useState({
    value: '',
  });

  const updateValue = (newData) => {
    setValue((prevState) => ({ ...prevState, ...newData }));
  };

  return (
    <SearchContext.Provider value={{ ...value, updateValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;