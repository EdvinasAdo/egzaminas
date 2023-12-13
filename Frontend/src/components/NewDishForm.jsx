// NewDishForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NewDishForm = () => {
  const [dishName, setDishName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [foodGroup, setFoodGroup] = useState('');
  const [spicyLevel, setSpicyLevel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!dishName || !ingredients || !price || !foodGroup || !spicyLevel) {
      alert('All fields are required');
      return;
    }

    // Create dish object
    const newDish = {
      dishName,
      ingredients,
      price,
      foodGroup,
      spicyLevel,
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:3001/addDish', newDish);
      console.log(response.data);
      alert('Dish added successfully');
      // Clear form inputs after successful submission
      setDishName('');
      setIngredients('');
      setPrice('');
      setFoodGroup('');
      setSpicyLevel('');
    } catch (error) {
      console.error(error);
      alert('Error adding dish');
    }
  };

  return (
    <div>
      <h2>Add New Dish</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dish Name:
          <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Food Group:
          <input type="text" value={foodGroup} onChange={(e) => setFoodGroup(e.target.value)} />
        </label>
        <label>
          Spicy Level:
          <input type="text" value={spicyLevel} onChange={(e) => setSpicyLevel(e.target.value)} />
        </label>
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default NewDishForm;