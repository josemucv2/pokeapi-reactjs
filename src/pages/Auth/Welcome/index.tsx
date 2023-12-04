import { useNavigate } from "react-router-dom";

export const Welcome: React.FC = (): JSX.Element => {
  const goPage = useNavigate();
  return (
    <div className="space-y-10">
      <p className="text-center title-general">
        ¡Gracias por esta oportunidad!. <br /> Este proyecto utiliza tecnologías
        como:
      </p>
      <ul className="list-disc m-14">
        <li className="title-general">React.JS</li>
        <li className="title-general">TypeScript</li>
        <li className="title-general">Vite.js</li>
        <li className="title-general">Tailwind CSS</li>
        <li className="title-general">DaisyUI</li>
        <li className="title-general">Axios</li>
      </ul>
      <div
        onClick={() => goPage("/login")}
        className="text-center hover:underline hover:text-blue-800 cursor-pointer"
      >
        ¡Haz Click para Iniciar!
      </div>
    </div>
  );
};
