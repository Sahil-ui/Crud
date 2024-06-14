import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../features/items/itemsSlice'
import ItemUpdateForm from './ItemUpdateForm';
import './ItemList.css'

const ItemList = () => {
  const items = useSelector((state) => state.items); 
  const dispatch = useDispatch(); 
  const [editingItem, setEditingItem] = useState(null); 

  return (
    <div className= 'item-list'>
      <ul>
        {items.map((item) => (
          <li key={item.id} className= 'item'>
            {item.name}
            
            <button onClick={() => dispatch(deleteItem(item.id))} className= 'delete-button'>Delete</button>
            <button onClick={() => setEditingItem(item)} className= 'edit-button'>Edit</button>
            
          </li>
        ))}
      </ul>
      {editingItem && (
        <ItemUpdateForm
          item={editingItem}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default ItemList;