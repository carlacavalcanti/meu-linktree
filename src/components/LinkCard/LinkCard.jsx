import { Link } from "react-router-dom";
import "./linkCard.css";

export default function LinkCard({ icon, url, title }) {
  const isInternal = url.startsWith("/");

  return (
    <li>
      {isInternal ? (
        <Link to={url} className="link">
          <img src={icon} alt="" />
          {title}
        </Link>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img src={icon} alt="" />
          {title}
        </a>
      )}
    </li>
  );
}
