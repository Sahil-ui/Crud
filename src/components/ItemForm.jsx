import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/items/itemsSlice';
import './ItemForm.css'

const ItemForm = () => {
  const [name, setName] = useState(''); 
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(addItem({ id: Date.now(), name })); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=" Enter"
        className= 'item-input'
      />
      <button type="submit" className= 'item-button' >Add Item</button>
    </form>
  );
};

export default ItemForm;
