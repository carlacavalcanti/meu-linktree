import "./profile.css";
import logo from "../../assets/imagens/logo.JPG";

export default function Profile() {
  return (
    <header>
      <div className="foto">
        <img className="imagem" src={logo} alt="Foto de Carla Cavalcanti" />
      </div>

      <div className="texto">
        <h1 className="nome">Carla Cavalcanti</h1>
        <p className="dev">Desenvolvedora Front-end.</p>
        <p className="sub">
          "Crio experiências digitais que valorizam o seu serviço."
        </p>
      </div>
    </header>
  );
}
