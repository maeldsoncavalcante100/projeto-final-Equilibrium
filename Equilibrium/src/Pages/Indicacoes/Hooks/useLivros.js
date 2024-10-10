import { useEffect, useState } from "react";
import {
  buscarLivros,
  criarLivro,
  atualizarLivro,
  deletarLivro,
} from "../Services/livrosService";

export function useLivros() {
  const [livros, setLivros] = useState([]);
  const [editingLivro, setEditingLivro] = useState(null);

  const carregarLivros = async () => {
    try {
      const data = await buscarLivros();
      setLivros(data);
    } catch (error) {
      console.error("Erro ao buscar os livros:", error);
    }
  };

  const salvarLivro = async (formData) => {
    try {
      if (editingLivro) {
        await atualizarLivro(editingLivro._id, formData);
        setEditingLivro(null);
      } else {
        await criarLivro(formData);
      }
      carregarLivros();
    } catch (error) {
      console.error("Erro ao salvar o livro:", error);
    }
  };

  const excluirLivro = async (id) => {
    try {
      await deletarLivro(id);
      carregarLivros();
    } catch (error) {
      console.error("Erro ao deletar o livro:", error);
    }
  };

  const editarLivro = (livro) => {
    setEditingLivro(livro);
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return {
    livros,
    editingLivro,
    setEditingLivro,
    salvarLivro,
    excluirLivro,
    editarLivro,
  };
}
