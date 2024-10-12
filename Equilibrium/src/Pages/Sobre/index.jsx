import "./Sobre.modules.css";
import MeditacaoImg from "../../assets/Mental health-pana.svg";

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre-texto">
        <h1>
          Descubra o <span className="equilibrium">Equilibrium</span>
        </h1>
        <p>
          Bem-vindo(a) ao nosso espaço de apoio e crescimento pessoal. No
          Equilibrium, acreditamos que cuidar da saúde mental é fundamental para
          uma vida mais plena e equilibrada. Aqui, você encontrará ferramentas,
          dicas e conteúdos que ajudam a manter o bem-estar e a enfrentar os
          desafios da vida com resiliência e clareza.
        </p>
        <p>
          Junte-se a nós nessa jornada de autoconhecimento e descubra recursos
          para fortalecer sua mente e seu espírito. Porque o equilíbrio começa
          de dentro para fora.
        </p>
      </div>
      <div className="sobre-imagem">
        <img src={MeditacaoImg} alt="Pessoa meditando" />
      </div>
    </section>
  );
};

export default Sobre;
