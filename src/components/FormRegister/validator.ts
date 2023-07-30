import { z } from "zod";

const schemaRegisterRequest = z
  .object({
    name: z.string().max(45).nonempty("Campo obrigatório"),
    email: z.string().email("Deve ser um e-mail válido"),
    fone: z.string().max(20).nonempty("Telefone deve ser informado"),
    password: z.string().nonempty("Senha é obrigatória"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirmação de senha deve ser igual a senha",
    path: ["confirmPassword"],
  });

export type TRegisterData = z.infer<typeof schemaRegisterRequest>;

const schemaRegisterResponse = z.object({
  name: z.string().max(45).nonempty("Campo obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  fone: z.string().max(20),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type TRegisterDataResponse = Omit<
  z.infer<typeof schemaRegisterRequest>,
  "confirmPassword"
>;

export { schemaRegisterRequest, schemaRegisterResponse };
