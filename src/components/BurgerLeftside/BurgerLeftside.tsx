import React from 'react';
import Amount from "../Amount/Amount";
import DeleteButton from "../DeleteButton/DeleteButton";

interface Props {
  image: string;
  name: string;
  addIngredients: React.MouseEventHandler;
  ingredients: IngCount[];
  index: number;
  onDelete: (name: string) => void;
}

const BurgerLeftside: React.FC<Props> = (props) => {
  return (
    <div className="card d-flex flex-row align-items-center p-1 mb-2 justify-content-between">
      <button onClick={props.addIngredients} className="imageBtn btn">
        <img alt="#" className="imageIng" src={props.image}/>
        <span>{props.name}</span>
      </button>
      <div className="d-flex align-items-center">
        <Amount amount={props.ingredients[props.index].count}/>
        <DeleteButton onDelete={() => props.onDelete(props.name)}/>
      </div>
    </div>
  );
};

export default BurgerLeftside;


