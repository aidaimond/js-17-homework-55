import React from 'react';
import './BurgerRightSide.css'

const BurgerRightside = () => {
  return (
    <div className="card d-flex flex-row col-6">
      <p>Burger</p>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
};

export default BurgerRightside;