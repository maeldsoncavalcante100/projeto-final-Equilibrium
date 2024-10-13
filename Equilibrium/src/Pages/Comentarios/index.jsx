/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";

import styles from "./Comentarios.module.css";

const Comentarios = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: Date.now(),
      text: newComment,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (id, text) => {
    setEditingCommentId(id);
    setEditingCommentText(text);
  };

  const handleSaveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editingCommentText }
          : comment
      )
    );
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  return (
    <div className={styles.comentariosContainer}>
      <h2 className={styles.title}>Comentários</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Digite seu comentário"
        />
        <button onClick={handleAddComment}>Comentar</button>
      </div>

      <div>
        {comments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            {editingCommentId === comment.id ? (
              <>
                <input
                  className={styles.editInput}
                  type="text"
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Salvar</button>
                <button onClick={() => setEditingCommentId(null)}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <p>{comment.text}</p>
                <button
                  onClick={() => handleEditComment(comment.id, comment.text)}
                >
                  Editar
                </button>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  Deletar
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
