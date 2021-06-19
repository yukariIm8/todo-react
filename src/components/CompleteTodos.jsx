import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed Tasks</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};