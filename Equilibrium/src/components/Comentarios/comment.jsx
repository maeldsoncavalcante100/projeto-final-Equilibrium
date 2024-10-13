comment.jsx

// src/components/Comment.jsx
import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);

    const handleSave = () => {
        onEdit(comment.id, editText);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <p>{comment.text}</p>
                    <button onClick={() => {
                        setIsEditing(true);
                        setEditText(comment.text);
                    }}>Editar</button>
                    <button onClick={() => onDelete(comment.id)}>Deletar</button>
                </div>
            )}
        </li>
    );
};

export default Comment;