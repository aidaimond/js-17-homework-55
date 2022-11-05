import React, {ReactNode} from 'react';
import './BurgerRightSide.css';

interface Props {
  ingredients: IngCount[];
}

const BurgerRightside: React.FC<Props> = ({ingredients}) => {

  return (
    <div className="border d-flex flex-row m-3 col-6">
      <div className="Burger">
        <p>Burger</p>
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {
          ingredients.map((ing) => {
          const arr:ReactNode[] = [];

          for(let i = 0; i < ing.count; i++) {
            arr.push(<div key={Math.random()} className={ing.name}></div>);
        }
            return arr;
          })
        }
        <div className="BreadBottom"></div>
      </div>
    </div>
)
  ;
};

export default BurgerRightside;