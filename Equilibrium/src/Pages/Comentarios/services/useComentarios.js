useComentarios.js

import axios from "axios";

const API_URL = "https://projeto-final-m4-pda.onrender.com/";

export const buscarLivros = async () => {
  const response = await axios.get(`${API_URL}/satisfaction`);
  return response.data;
};

export const criarLivro = async (novoLivro) => {
  const response = await axios.post(`${API_URL}/satisfaction`, novoLivro);
  return response.data;
};

export const atualizarLivro = async (id, livroAtualizado) => {
  const response = await axios.put(`${API_URL}/satisfaction/${id}`, livroAtualizado);
  return response.data;
};

export const deletarLivro = async (id) => {
  try {
    await axios.delete(`${API_URL}/satisfaction/${id}`);
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
    throw error;
  }
};