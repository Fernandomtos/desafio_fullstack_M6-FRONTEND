import { useForm } from "react-hook-form";
import schema, { LoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleSubmit()}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
      </form>
    </main>
  );
};

export default Login;
