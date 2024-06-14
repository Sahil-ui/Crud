import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateItem } from '../features/items/itemsSlice';
import './ItemUpdateForm.css'

const ItemUpdateForm = ({ item, onClose }) => {
    const [name, setName] = useState(item.name);
    const dispatch = useDispatch(); 
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      dispatch(updateItem({ ...item, name })); 
      onClose(); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Enter update"
          className= 'update-input'
        />
        <button type="submit" className= 'update-button'>Update Item</button>
        <button type="button" className= 'cancel-button' onClick={onClose}>Cancel</button>
      </form>
    );
  };

  export default  ItemUpdateForm;