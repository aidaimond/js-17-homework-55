import React, {useState} from 'react';
import './App.css';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacon.png';
import BurgerLeftside from "../../components/BurgerLeftside/BurgerLeftside";
import BurgerRightside from "../../components/BurgerRightside/BurgerRightside";

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

function App() {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);

  const addIngredients = (name: string) => {
    setIngredients(prev => prev.map((ingredient: IngCount) => {
      return ingredient.name === name ? {
        ...ingredient,
        count: ingredient.count + 1,
      } : ingredient;
    }))
  };

  const deleteIngredients = (name: string) => {
    setIngredients(prev => prev.map((ingredient: IngCount) => {
      if (ingredient.name === name) {
        const item = {...ingredient};
        if (item.count === 0) {
          item.count = 0;
        } else {
          item.count = item.count - 1;
        }
        return item
      }
      return ingredient
    }))
  };

  return (
    <div className="m-3 container d-flex">
      <div className="m-3 text-center border col-6">
        <p>Ingredients</p>
        <div className="m-3">
          {INGREDIENTS.map((ingredient, index) => (
            <div key={index}>
              <BurgerLeftside
                key={ingredient.name + index}
                image={ingredient.image}
                name={ingredient.name}
                addIngredients={() => addIngredients(ingredients[index].name)}
                index={index}
                ingredients={ingredients}
                onDelete={deleteIngredients}
              />
            </div>
          ))}
        </div>
      </div>
      <BurgerRightside/>
    </div>
  );
}

export default App;
