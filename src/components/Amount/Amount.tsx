import React from 'react';

interface Props {
  amount: number;
}

const Amount: React.FC<Props> = (props) => {
  return (
    <strong className="me-2">{props.amount}
    </strong>
  );
};

export default Amount;