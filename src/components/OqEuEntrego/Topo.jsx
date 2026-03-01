import "./header.css";
import videoBg from "../../assets/imagens/mixkit-hands-of-a-girl-working-on-a-computer-4938-hd-ready.mp4";
import Foto from "../../assets/imagens/topo-foto.jpg";

export default function Topo() {
  return (
    <section className="hero">
      <div className="header">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>O que você recebe ao me contratar</h1>
          <p>Mais que um site bonito — uma presença digital estratégica.</p>
        </div>
      </div>
    </section>
  );
}
