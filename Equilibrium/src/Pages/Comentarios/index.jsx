index.jsx

// src/components/CommentsSection.jsx
import React, { useState, useEffect } from 'react';
import { getComments, addComment, updateComment, deleteComment } from '../services/commentsService';
import Comment from '../../components/Comentarios/comment';

const CommentsSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        loadComments();
    }, []);

    const loadComments = async () => {
        try {
            const data = await getComments();
            setComments(data);
        } catch (error) {
            console.error("Erro ao buscar comentários:", error);
        }
    };

    const handleAddComment = async () => {
        try {
            const addedComment = await addComment(newComment);
            setComments([...comments, addedComment]);
            setNewComment('');
        } catch (error) {
            console.error("Erro ao adicionar comentário:", error);
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            await deleteComment(id);
            setComments(comments.filter(comment => comment.id !== id));
        } catch (error) {
            console.error("Erro ao deletar comentário:", error);
        }
    };

    const handleEditComment = async (id, updatedText) => {
        try {
            const updatedComment = await updateComment(id, updatedText);
            setComments(comments.map(comment =>
                comment.id === id ? updatedComment : comment
            ));
        } catch (error) {
            console.error("Erro ao editar comentário:", error);
        }
    };
    return (
        <div>
            <h2>Comentários</h2>
            <ul>
                {comments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onDelete={handleDeleteComment}
                        onEdit={handleEditComment}
                    />
                ))}
            </ul>

            <div>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escreva um comentário..."
                />
                <button onClick={handleAddComment}>Comentar</button>
            </div>
        </div>
    );
};

export default CommentsSection;