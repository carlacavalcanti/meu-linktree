import Topo from "./Topo.jsx";
import Servicos from "./Servicos.jsx";

export default function Render() {
  return (
    <>
      <Topo />
      <div className="container">
        <Servicos />
      </div>
    </>
  );
}
