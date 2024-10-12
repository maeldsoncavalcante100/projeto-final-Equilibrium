
import { useState } from "react";
import Card from "../../components/Cards";
import styles from "./Indicacoes.module.css";
import { useLivros } from "./Hooks/useLivros.js"

function Indicacoes() {
  const { livros, editingLivro, salvarLivro, excluirLivro, editarLivro } =
    useLivros();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    link: "",
  });

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await salvarLivro(formData);
    setFormData({ name: "", description: "", price: "", link: "" });
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className={styles.indicacoes}>
      <h2>Indicações de leitura</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome do Livro"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descrição"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Preço"
          required
        />
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Link para compra"
          required
        />
        <button type="submit">
          {editingLivro ? "Atualizar Livro" : "Adicionar Livro"}
        </button>
      </form>

      {livros.length > 0 ? (
        <section className={styles.lista}>
          {livros.map((liv) => (
            <Card
              key={liv._id}
              id={liv._id}
              name={liv.name}
              description={liv.description}
              price={liv.price}
              link={liv.link}
              onEdit={() => editarLivro(liv)}
              onDelete={() => excluirLivro(liv._id)}
            />
          ))}
        </section>
      ) : (
        <p>Carregando livros...</p>
      )}
    </section>
  );
}

export default Indicacoes;
