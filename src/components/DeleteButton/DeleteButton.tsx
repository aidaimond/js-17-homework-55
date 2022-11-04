import React from 'react';

interface Props {
  onDelete: () => void;
}

const DeleteButton: React.FC<Props> = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;