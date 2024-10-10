import styles from "./Card.modules.css";
import { BsArrowRight, BsPencil, BsTrash } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

function Card({ _id, name, description, price, link, onEdit, onDelete }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className={styles.price}>R${price.toFixed(2)}</span>

      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>

        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botao}
        >
          <BsArrowRight />
        </Link>

        <button
          onClick={onEdit}
          className={styles.botao}
          aria-label="Editar Livro"
        >
          <BsPencil />
        </button>
        <button
          onClick={() => onDelete(_id)}
          className={styles.botao}
          aria-label="Excluir Livro"
        >
          <BsTrash />
        </button>
      </div>
    </section>
  );
}

export default Card;
