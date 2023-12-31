import { Input, Button } from "@/components";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import LoginIconWhite from "@/assets/icons/loginWhite.svg";

export const Login = () => {

  const {
    formData: { email, password },
    handleInputChange,
    loading,
    login,
    errorData,
  } = useLogin();

  const goPage = useNavigate();
  return (
    <div className="auth">
      <div className="px-12 space-y-10">
        <p className="title-general text-center">Iniciar Sesion</p>
        <Input
          labelTop="Email"
          placeholder="Ingrese el correo electronico"
          value={email}
          errorMsg={errorData.email}
          onChange={handleInputChange}
          name="email"
        />

        <Input
          labelTop="Contraseña"
          type="password"
          placeholder="Ingrese su contrasena"
          value={password}
          errorMsg={errorData.password}
          onChange={handleInputChange}
          name="password"
        />

        <Button
          onClick={login}
          content="Iniciar Sesion"
          loading={loading}
          disabled={loading}
          iconLeft={LoginIconWhite}
        />

        <p
          onClick={() => goPage("/")}
          className="cursor-pointer hover:text-blue hover:underline text-center"
        >
          Ir a Inicio
        </p>
      </div>
    </div>
  );
};
