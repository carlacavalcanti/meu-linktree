import LinkCard from "../LinkCard/LinkCard.jsx";
import { links } from "../links/links.jsx";
import "./linksList.css";

export default function LinksList() {
  return (
    <ul className="lista">
      {links.map((card, index) => (
        <LinkCard
          key={index}
          icon={card.icon}
          url={card.url}
          title={card.title}
        />
      ))}
    </ul>
  );
}
