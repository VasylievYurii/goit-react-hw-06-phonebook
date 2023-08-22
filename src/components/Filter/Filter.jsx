import React, { useState } from 'react';
import { FilterLabel, FilterInput, RiUserSearchLineSvg } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getStatusFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const localStore = useSelector(getStatusFilter);
  const [text, setText] = useState(localStore ?? '');

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
