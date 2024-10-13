/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Comment.module.css";

const Comment = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleSave = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="comment-item">
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            className="comment-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="button" onClick={handleSave}>
            Salvar
          </button>
          <button className="button cancel" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </div>
      ) : (
        <div className="display-container">
          <p>{comment.text}</p>
          <button
            className="button"
            onClick={() => {
              setIsEditing(true);
              setEditText(comment.text);
            }}
          >
            Editar
          </button>
          <button
            className="button delete"
            onClick={() => onDelete(comment.id)}
          >
            Deletar
          </button>
        </div>
      )}
    </li>
  );
};

export default Comment;
