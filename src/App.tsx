import React, {useState} from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';

function App() {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage },
    {name: 'Cheese', price: 50, image: cheeseImage },
    {name: 'Salad', price: 10, image: saladImage },
    {name: 'Bacon', price: 60, image: baconImage },
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);

  return (
    <div className="m-3 container d-flex">
      <div className="m-3 text-center border">
        <p>Ingredients</p>
        <div className="m-3">
          {INGREDIENTS.map(ingredient => (
            <div key={ingredient.image} className="card d-flex flex-row align-items-center p-1 mb-2 justify-content-between">
              <button className="imageBtn btn">
                  <img className="imageIng" src={ingredient.image}/>
                <span>{ingredient.name}</span>
              </button>
              <span className="d-flex align-items-center">
              <strong className="me-2">amount</strong>
            <button
              className="btn btn-primary">
              Delete
            </button>
            </span>
            </div>
          ))}
        </div>
      </div>
     <div className="card d-flex">
       <div className="Burger">
         <div className="BreadTop">
           <div className="Seeds1"></div>
           <div className="Seeds2"></div>
         </div>
         <div className="BreadBottom"></div>
       </div>
     </div>
    </div>
  );
}

export default App;
