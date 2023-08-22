import React, { useState } from 'react';
import { FilterLabel, FilterInput, RiUserSearchLineSvg } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleOnChange = e => {
    const newText = e.currentTarget.value;
    setText(newText);
    dispatch(setFilter(newText));
  };

  return (
    <FilterLabel>
      <FilterInput
        type="text"
        value={text}
        onChange={handleOnChange}
        placeholder="Name"
      />
      <RiUserSearchLineSvg />
    </FilterLabel>
  );
};

export default Filter;
