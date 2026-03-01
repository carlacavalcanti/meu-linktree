import CardsServicos from "./CardsServicos";
import "./servicos.css";
import Landing from "../../assets/icons/web-design.png";
import Responsivo from "../../assets/icons/responsive-design.png";
import Estrategia from "../../assets/icons/bar-graph.png";
import Headset from "../../assets/icons/headset.png";

export default function Servicos() {
  return (
    <>
      <div className="servico">
        <div className="titulo">
          <img src={Landing} alt="" />
          <h2>Landing Page Profissional</h2>
        </div>
        <ul>
          <CardsServicos
            servicos={[
              "Layout moderno e estratégico",
              "Design focado em conversão",
              "Identidade visual alinhada com sua marca",
            ]}
          />
        </ul>
      </div>

      <div className="servico">
        <div className="titulo">
          <img src={Responsivo} alt="" />
          <h2>Totalmente Responsivo</h2>
        </div>
        <ul>
          <CardsServicos
            servicos={[
              "Funciona perfeitamente no celular",
              "Adaptado para tablet e desktop",
              "Experiência fluida em qualquer tela",
            ]}
          />
        </ul>
      </div>

      <div className="servico">
        <div className="titulo">
          <img src={Estrategia} alt="" />
          <h2>Estrutura Estratégica</h2>
        </div>
        <ul>
          <CardsServicos
            servicos={[
              "Seções pensadas para conversão",
              "CTAs bem posicionados",
              "Copy organizada visualmente",
            ]}
          />
        </ul>
      </div>

      <div className="servico">
        <div className="titulo">
          <img src={Headset} alt="" />
          <h2>Suporte Inicial</h2>
        </div>
        <ul>
          <CardsServicos
            servicos={[
              "Ajustes após entrega",
              "Orientação para uso",
              "Orientação para manutenção",
              "Comunicação clara durante o projeto",
            ]}
          />
        </ul>
        <div className="cta">
          <a
            className="button-whats"
            href="https://wa.me/5584999752332"
            target="_blank"
            rel="noopener noreferrer"
          >
            Começar meu projeto
          </a>
        </div>
      </div>
    </>
  );
}
