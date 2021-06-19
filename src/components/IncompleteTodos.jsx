import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Tasks</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};