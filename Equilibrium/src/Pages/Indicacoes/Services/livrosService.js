import axios from "axios";

const API_URL = "https://projeto-final-m4-pda.onrender.com";

export const buscarLivros = async () => {
  const response = await axios.get(`${API_URL}/livros`);
  return response.data;
};

export const criarLivro = async (novoLivro) => {
  const response = await axios.post(`${API_URL}/livro`, novoLivro);
  return response.data;
};

export const atualizarLivro = async (id, livroAtualizado) => {
  const response = await axios.put(`${API_URL}/livros/${id}`, livroAtualizado);
  return response.data;
};

export const deletarLivro = async (id) => {
  try {
    await axios.delete(`${API_URL}/livro/${id}`);
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
    throw error;
  }
};
