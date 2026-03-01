import Icon from "../../assets/icons/seta-direita.png";
export default function CardsServicos({ servicos }) {
  return (
    <>
      {servicos.map((item, index) => (
        <li key={index}>
          <img src={Icon} alt="" className="icon" />
          <span className="texto-item">{item}</span>
        </li>
      ))}
    </>
  );
}
