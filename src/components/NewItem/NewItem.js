import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../store/orderSlice';
import { useNavigate } from 'react-router-dom';
import './NewItem.css';

function NewItem() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lastName.length <= 20 && description.length <= 100 && quantity >= 1 && quantity <= 20) {
      dispatch(addOrder({
        id: Date.now(),
        firstName,
        lastName,
        description,
        quantity
      }));
      setIsDisabled(true);
      navigate('/');
    }
  };

  return (
    <div className='newItem'>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name </label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={20} />
        </div>
        <div>
          <label>Last Name <span>*</span></label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={20} required />
        </div>
        <div>
          <label>Order Description <span>*</span></label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={100} required />
        </div>
        <div>
          <label>Quantity (1-20)<span>*</span></label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min={1} max={20} required />
        </div>
        <button type="submit" disabled={isDisabled}>Submit</button>
      </form>
    </div>
  );
}

export default NewItem;
